import { boolean, pgTable, text, uuid } from "drizzle-orm/pg-core";

export const userSchema = pgTable("user", {
  id: uuid().defaultRandom().primaryKey(),
});
