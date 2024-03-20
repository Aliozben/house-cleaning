import path from "path";
import dotenv from "dotenv";

dotenv.config({path: path.resolve(__dirname, "../../.env")});

type Env = {
  DATABASE_URL: string;
  NEXTAUTH_URL: string;
  NEXTAUTH_SECRET: string;
  UPSTASH_REDIS_REST_URL: string;
  UPSTASH_REDIS_REST_TOKEN: string;
  SMTP_EMAIL: string;
  SMTP_SECRET: string;
  SMTP_HOST: string;
  SMTP_PORT: number;
};

type Config = Required<Env>;

const getConfig = (): Env => ({
  DATABASE_URL: process.env.DATABASE_URL!,
  NEXTAUTH_URL: process.env.NEXTAUTH_URL!,
  NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET!,
  UPSTASH_REDIS_REST_URL: process.env.UPSTASH_REDIS_REST_URL!,
  UPSTASH_REDIS_REST_TOKEN: process.env.UPSTASH_REDIS_REST_TOKEN!,
  SMTP_EMAIL: process.env.SMTP_EMAIL!,
  SMTP_SECRET: process.env.SMTP_SECRET!,
  SMTP_HOST: process.env.SMTP_HOST!,
  SMTP_PORT: Number(process.env.SMTP_PORT!),
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
