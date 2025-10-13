import Redis from "ioredis";

let redis: Redis | null = null;
if (process.env.REDIS_URL) {
  redis = new Redis(process.env.REDIS_URL);
  redis.on("error", (e) => {
    console.error("Redis error:", e);
    // Consider setting redis = null to fallback
  });
}

export async function getCachedFlags(key: string) {
  if (!redis) return null;
  const v = await redis.get(key);
  return v ? JSON.parse(v) : null;
}
export async function setCachedFlags(key: string, payload: any, ttl = 60) {
  if (!redis) return;
  await redis.set(key, JSON.stringify(payload), "EX", ttl);
}
export async function delCachedFlags(key: string) {
  if (!redis) return;
  await redis.del(key);
}
