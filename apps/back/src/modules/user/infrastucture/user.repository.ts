import { db, TDB } from "@back/db";
import { userSchemas } from "@back/db/schemas/user/user.schema";
import { eq } from "drizzle-orm";

export class UserRepository {
  db: TDB;

  constructor(db: TDB) {
    this.db = db;
  }

  public async getUserByTgId(tgId: string) {
    return await this.db
      .select()
      .from(userSchemas.userConfigSchema)
      .where((it) => eq(it.tgId, tgId));
  }
}
