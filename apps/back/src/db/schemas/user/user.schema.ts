import { sql } from "drizzle-orm";
import { boolean, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

const userConfigSchema = pgTable("user_config", {
  id: uuid("id").defaultRandom().primaryKey(),
  tgId: text("tg_id").unique().notNull(),
  tgUsername: text("tg_username").unique().notNull(),
  firstName: text("first_name"),
  lastName: text("last_name"),
  photoUrl: text("photo_url"),
  authDate: text("auth_date"),
  createdAt: timestamp()
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
});

const userProfileSchema = pgTable("user_profile", {
  id: uuid().defaultRandom().primaryKey(),
  userId: uuid("user_id")
    .references(() => userConfigSchema.id)
    .notNull(),
  birthday: timestamp("birthday"),
  nickname: text("nickname"),
  bio: text("bio"),
  createdAt: timestamp("createdAt").default(sql`CURRENT_TIMESTAMP`),
  updatedAt: timestamp("updatedAt").default(sql`CURRENT_TIMESTAMP`),
});

export const userSchemas = {
  userConfigSchema,
  userProfileSchema,
};
