import { readingRouter } from "~/server/api/routers/reading";
import { spreadRouter } from "~/server/api/routers/spread";
import { tarotRouter } from "~/server/api/routers/tarot";
import { createCallerFactory, createTRPCRouter } from "~/server/api/trpc";

export const appRouter = createTRPCRouter({
  spread: spreadRouter,
  reading: readingRouter,
  tarot: tarotRouter,
});

export type AppRouter = typeof appRouter;

export const createCaller = createCallerFactory(appRouter);
