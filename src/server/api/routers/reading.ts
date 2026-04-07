import { TRPCError } from "@trpc/server";
import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
} from "~/server/api/trpc";

const drawResultSchema = z.array(
  z.object({
    cardId: z.number().int().min(0).max(77),
    reversed: z.boolean(),
    positionLabel: z.string(),
    positionIndex: z.number().int().min(0),
  }),
);

export const readingRouter = createTRPCRouter({
  create: protectedProcedure
    .input(
      z.object({
        spreadId: z.string(),
        question: z.string().max(200).optional(),
        drawResult: drawResultSchema,
        interpretation: z.string().min(1).max(50_000),
      }),
    )
    .mutation(({ ctx, input }) =>
      ctx.db.readingRecord.create({
        data: {
          clerkUserId: ctx.userId,
          spreadId: input.spreadId,
          question: input.question?.trim() || null,
          drawResult: input.drawResult,
          interpretation: input.interpretation,
        },
      }),
    ),

  list: protectedProcedure
    .input(
      z
        .object({
          spreadId: z.string().optional(),
          from: z.coerce.date().optional(),
          to: z.coerce.date().optional(),
        })
        .optional(),
    )
    .query(({ ctx, input }) => {
      const where: {
        clerkUserId: string;
        spreadId?: string;
        createdAt?: { gte?: Date; lte?: Date };
      } = { clerkUserId: ctx.userId };

      if (input?.spreadId) where.spreadId = input.spreadId;
      if (input?.from ?? input?.to) {
        where.createdAt = {};
        if (input.from) where.createdAt.gte = input.from;
        if (input.to) where.createdAt.lte = input.to;
      }

      return ctx.db.readingRecord.findMany({
        where,
        orderBy: { createdAt: "desc" },
        include: { spread: true },
        take: 100,
      });
    }),

  getById: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      const row = await ctx.db.readingRecord.findUnique({
        where: { id: input.id },
        include: { spread: true },
      });
      if (!row || row.clerkUserId !== ctx.userId) {
        throw new TRPCError({ code: "NOT_FOUND", message: "记录不存在" });
      }
      return row;
    }),

  delete: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const row = await ctx.db.readingRecord.findUnique({
        where: { id: input.id },
      });
      if (!row || row.clerkUserId !== ctx.userId) {
        throw new TRPCError({ code: "NOT_FOUND", message: "记录不存在" });
      }
      await ctx.db.readingRecord.delete({ where: { id: input.id } });
      return { ok: true as const };
    }),

  clearAll: protectedProcedure.mutation(async ({ ctx }) => {
    await ctx.db.readingRecord.deleteMany({
      where: { clerkUserId: ctx.userId },
    });
    return { ok: true as const };
  }),
});
