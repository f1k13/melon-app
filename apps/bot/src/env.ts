import { config } from "dotenv";
import { z } from "zod";

config();

const envSchema = z.object({
  BOT_TOKEN: z.string().nonempty("BOT_TOKEN is req"),
});

const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
  console.error("Invalid environment variables:", parsedEnv.error.format());
  process.exit(1);
}

export const envConfig = parsedEnv.data;
