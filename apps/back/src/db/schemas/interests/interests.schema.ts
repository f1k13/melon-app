import { pgTable, text, uuid } from "drizzle-orm/pg-core";

export const interestsSchema = pgTable("interests", {
  id: uuid().defaultRandom().primaryKey(),
  interest: text("interest").notNull(),
});
