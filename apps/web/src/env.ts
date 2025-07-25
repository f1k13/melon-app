import { config } from "dotenv";
import { z } from "zod";

config();

const envSchema = z.object({
  VITE_API_URL: z.string().nonempty("VITE_API_URL is req"),
});

const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
  console.error("Invalid environment variables:", parsedEnv.error.format());
  process.exit(1);
}

export const envConfig = parsedEnv.data;
