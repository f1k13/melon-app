import { logsSchema } from "@back/db/schemas/logs/logs.schema";
import { TLogsDto } from "@back/modules/model/logs/logs.model";
import { AppRepository } from "../app.repository";

export class LogsRepository extends AppRepository {
  public async insertLog(dto: TLogsDto) {
    await this.db.insert(logsSchema).values({
      ...dto,
      module: dto.module!,
    });
  }
}
