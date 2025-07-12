import { TDB } from "@back/db";
import { logsSchema } from "@back/db/schemas/logs/logs.schema";
import { TLogsDto } from "@back/modules/model/logs/logs.model";

export class LogsRepository {
  db: TDB;
  constructor(db: TDB) {
    this.db = db;
  }

  public async insertLog(dto: TLogsDto) {
    await this.db.insert(logsSchema).values({
      ...dto,
      module: dto.module!,
    });
  }
}
