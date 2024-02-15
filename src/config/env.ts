import path from "path";
import dotenv from "dotenv";

dotenv.config({path: path.resolve(__dirname, "../../.env")});

type Env = {
  DATABASE_URL: string;
  NEXTAUTH_URL: string;
  NEXTAUTH_SECRET: string;
  UPSTASH_REDIS_REST_URL: string;
  UPSTASH_REDIS_REST_TOKEN: string;
  EMAIL_ADDRESS: string;
  EMAIL_SECRET: string;
};

type Config = Required<Env>;

const getConfig = (): Env => ({
  DATABASE_URL: process.env.DATABASE_URL!,
  NEXTAUTH_URL: process.env.NEXTAUTH_URL!,
  NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET!,
  UPSTASH_REDIS_REST_URL: process.env.UPSTASH_REDIS_REST_URL!,
  UPSTASH_REDIS_REST_TOKEN: process.env.UPSTASH_REDIS_REST_TOKEN!,
  EMAIL_ADDRESS: process.env.EMAIL_ADDRESS!,
  EMAIL_SECRET: process.env.EMAIL_SECRET!,
});

const getSanitzedConfig = (config: Env): Config => {
  for (const [key, value] of Object.entries(config)) {
    if (value === undefined) {
      throw new Error(`Missing key ${key} in .env`);
    }
  }

  return config as Config;
};

const config = getConfig();

const sanitizedConfig = getSanitzedConfig(config);

export default sanitizedConfig;
