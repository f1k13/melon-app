import { EModule } from "@back/enums/module.enum";
import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { userConfigSchema } from "../user/user.schema";

export const logsSchema = pgTable("logs", {
  id: uuid().defaultRandom().primaryKey(),
  module: text("module").$type<EModule>().notNull(),
  text: text("text"),
  method: text("method"),
  userId: uuid("user_id").references(() => userConfigSchema.id),
  createdAt: timestamp("created_at").defaultNow(),
});
