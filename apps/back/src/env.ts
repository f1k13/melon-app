import { config } from "dotenv";
import { z } from "zod";

config();

const envSchema = z.object({
  PORT: z.string().nonempty("PORT is req"),
  DATABASE_URL: z.string().nonempty("DATEBASE_URL is req"),
  BOT_TOKEN: z.string().nonempty("BOT_TOKEN is req"),
  SECRET_KEY: z.string().nonempty("SECRET_KEY is req"),
});

const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
  console.error("Invalid environment variables:", parsedEnv.error.format());
  process.exit(1);
}

export const envConfig = parsedEnv.data;
