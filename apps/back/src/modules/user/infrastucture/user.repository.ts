import { db, TDB } from "@back/db";

export class UserRepository {
  db: TDB;

  constructor(db: TDB) {
    this.db = db;
  }
}
