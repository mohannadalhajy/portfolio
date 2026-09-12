import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

// Upstash's REST client works from any serverless/edge runtime (unlike a
// TCP-based Redis client), and its limit counters are shared across every
// Vercel instance and region — unlike an in-memory counter, which would be
// scoped to a single, ephemeral lambda.
//
// Vercel's "Upstash for Redis" marketplace integration provisions these
// under the legacy Vercel KV env var names (KV_REST_API_URL /
// KV_REST_API_TOKEN) rather than Upstash's own UPSTASH_REDIS_REST_* names,
// so support both.
const restUrl = process.env.KV_REST_API_URL ?? process.env.UPSTASH_REDIS_REST_URL;
const restToken = process.env.KV_REST_API_TOKEN ?? process.env.UPSTASH_REDIS_REST_TOKEN;
const redis = restUrl && restToken ? new Redis({ url: restUrl, token: restToken }) : null;

const ratelimit = redis
  ? new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(5, "10 m"),
      prefix: "ratelimit:contact",
    })
  : null;

let warnedMissingConfig = false;

export type RateLimitResult = {
  success: boolean;
  limit: number;
  remaining: number;
  reset: number;
};

// Rate-limits by an arbitrary identifier (e.g. client IP). Fails open (and
// logs once) if Upstash isn't configured, so a missing env var degrades the
// site to "unlimited" rather than a hard outage of the contact form.
export async function checkRateLimit(identifier: string): Promise<RateLimitResult> {
  if (!ratelimit) {
    if (!warnedMissingConfig) {
      console.warn(
        "KV_REST_API_URL/KV_REST_API_TOKEN (or UPSTASH_REDIS_REST_URL/UPSTASH_REDIS_REST_TOKEN) are not configured — rate limiting is disabled."
      );
      warnedMissingConfig = true;
    }
    return { success: true, limit: 0, remaining: 0, reset: 0 };
  }

  const { success, limit, remaining, reset } = await ratelimit.limit(identifier);
  return { success, limit, remaining, reset };
}
