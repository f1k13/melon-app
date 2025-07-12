import { EModule } from "@back/enums/module.enum";
import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const logsSchema = pgTable("logs", {
  id: uuid().defaultRandom().primaryKey(),
  module: text("status").$type<EModule>().notNull(),
  text: text("text"),
  createdAt: timestamp("created_at").defaultNow(),
});
