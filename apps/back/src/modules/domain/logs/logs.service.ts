import { LogsRepository } from "@back/modules/infrastructure/logs/logs.repostiory";
import { TLogsDto } from "@back/modules/model/logs/logs.model";

export class LogsService {
  logsRepository: LogsRepository;

  constructor(logsRepo: LogsRepository) {
    this.logsRepository = logsRepo;
  }

  public async insertLog(dto: TLogsDto) {
    await this.logsRepository.insertLog(dto);
  }
}
