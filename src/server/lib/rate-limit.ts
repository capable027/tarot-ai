import { env } from "~/env";

type Bucket = { count: number; day: string };

const buckets = new Map<string, Bucket>();

function today() {
  return new Date().toISOString().slice(0, 10);
}

export function checkAiRateLimit(key: string, limit: number): boolean {
  const day = today();
  const b = buckets.get(key);
  if (!b || b.day !== day) {
    buckets.set(key, { count: 1, day });
    return true;
  }
  if (b.count >= limit) return false;
  b.count += 1;
  return true;
}

export function getAiLimits() {
  return {
    perUser: env.AI_DAILY_LIMIT_PER_USER,
    perIp: env.AI_DAILY_LIMIT_PER_IP,
  };
}
