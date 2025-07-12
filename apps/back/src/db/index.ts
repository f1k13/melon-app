import { drizzle } from "drizzle-orm/postgres-js";
import { envConfig } from "../env";
import * as schema from "./schemas";
import postgres = require("postgres");

if (!envConfig) {
  throw new Error("env not defined");
}
const queryClient = postgres(String(envConfig.DATABASE_URL));

export const db = drizzle(queryClient, { schema });

export type TDB = ReturnType<typeof drizzle>;
