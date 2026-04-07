import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    DATABASE_URL: z.string().url(),
    NODE_ENV: z
      .enum(["development", "test", "production"])
      .default("development"),
    CLERK_SECRET_KEY: z.string().min(1),
    DEEPSEEK_API_KEY: z.string().optional(),
    DEEPSEEK_MODEL: z.string().optional().default("deepseek-chat"),
    OPENAI_API_KEY: z.string().optional(),
    AI_DAILY_LIMIT_PER_USER: z.coerce.number().optional().default(30),
    AI_DAILY_LIMIT_PER_IP: z.coerce.number().optional().default(40),
  },
  client: {
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: z.string().min(1),
  },
  runtimeEnv: {
    DATABASE_URL: process.env.DATABASE_URL,
    NODE_ENV: process.env.NODE_ENV,
    CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY,
    DEEPSEEK_API_KEY: process.env.DEEPSEEK_API_KEY,
    DEEPSEEK_MODEL: process.env.DEEPSEEK_MODEL,
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
    AI_DAILY_LIMIT_PER_USER: process.env.AI_DAILY_LIMIT_PER_USER,
    AI_DAILY_LIMIT_PER_IP: process.env.AI_DAILY_LIMIT_PER_IP,
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY:
      process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
  },
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  emptyStringAsUndefined: true,
});
