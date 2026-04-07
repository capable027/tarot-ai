import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { checkAiRateLimit, getAiLimits } from "~/server/lib/rate-limit";
import { interpretDraw } from "~/server/lib/tarot-ai";

const interpretInput = z.object({
  spreadId: z.string(),
  question: z.string().max(200).optional().default(""),
  draws: z
    .array(
      z.object({
        cardId: z.number().int().min(0).max(77),
        reversed: z.boolean(),
        positionLabel: z.string(),
      }),
    )
    .min(1)
    .max(12),
});

export const tarotRouter = createTRPCRouter({
  cardsMeta: publicProcedure.query(({ ctx }) =>
    ctx.db.tarotCard.findMany({
      select: { id: true, name: true, emoji: true },
      orderBy: { id: "asc" },
    }),
  ),

  interpret: publicProcedure
    .input(interpretInput)
    .mutation(async ({ ctx, input }) => {
      const limits = getAiLimits();
      const ip =
        ctx.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
        ctx.headers.get("x-real-ip") ??
        "unknown";

      if (!checkAiRateLimit(`ai:ip:${ip}`, limits.perIp)) {
        throw new TRPCError({
          code: "TOO_MANY_REQUESTS",
          message: "今日解读次数过多，请稍后再试",
        });
      }
      if (
        ctx.userId &&
        !checkAiRateLimit(`ai:user:${ctx.userId}`, limits.perUser)
      ) {
        throw new TRPCError({
          code: "TOO_MANY_REQUESTS",
          message: "今日解读次数已达上限",
        });
      }

      const spread = await ctx.db.spread.findUnique({
        where: { id: input.spreadId },
      });
      if (!spread) {
        throw new TRPCError({ code: "NOT_FOUND", message: "牌阵不存在" });
      }
      if (input.draws.length !== spread.cardCount) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "抽牌数量与牌阵不符",
        });
      }

      const text = await interpretDraw(
        spread.name,
        input.question.trim(),
        input.draws,
      );

      return { text };
    }),
});
