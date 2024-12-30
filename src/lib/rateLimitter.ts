import {Ratelimit} from "@upstash/ratelimit";
import {Redis} from "@upstash/redis";
import {NextRequest} from "next/server";

export const rateLimiter = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(3, "1 m"),
});

export const limitter = async (req: NextRequest) => {
  let ip = req.ip ?? req.headers.get("x-real-ip");
  const forwardedFor = req.headers.get("x-forwarded-for");
  if (!ip && forwardedFor) {
    ip = forwardedFor.split(",").at(0) ?? "Unknown";
  }
  return rateLimiter.limit(ip ?? "");
};
