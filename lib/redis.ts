import Redis from "ioredis";

declare global {
  var redisClient: Redis | undefined;
}

const redisUrl = process.env.REDIS_URL || "redis://localhost:6379";

let redis: Redis;

if (process.env.NODE_ENV === "production") {
  redis = new Redis(redisUrl);
} else {
  if (!global.redisClient) {
    global.redisClient = new Redis(redisUrl);
  }
  redis = global.redisClient;
}

export default redis;
