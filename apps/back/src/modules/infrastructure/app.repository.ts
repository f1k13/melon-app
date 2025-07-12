import { db, TDB } from "@back/db";

export class AppRepository {
  protected db: TDB;

  constructor() {
    this.db = db;
  }
}
