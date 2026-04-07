import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const spreadRouter = createTRPCRouter({
  list: publicProcedure.query(({ ctx }) =>
    ctx.db.spread.findMany({
      orderBy: [{ hot: "desc" }, { id: "asc" }],
    }),
  ),
});
