import { FastifyReply } from "fastify";
import { ZodSchema } from "zod";
import { LogsService } from "../domain/logs/logs.service";
import { LogsRepository } from "../infrastructure/logs/logs.repostiory";
import { db } from "@back/db";
import { EModule } from "@back/enums/module.enum";

export class AppController {
  private logsRepository = new LogsRepository(db);
  private logsService = new LogsService(this.logsRepository);

  protected validateZod<T>(schema: ZodSchema<T>, data: unknown) {
    try {
      return schema.parse(data);
    } catch (error) {
      throw error;
    }
  }
  protected handlerError(
    text: string,
    error: unknown,
    reply: FastifyReply,
    module: EModule
  ) {
    if (error instanceof Error) {
      this.logsService.insertLog({ text, module });
      console.log(error.message);
      reply.status(400).send({ message: error.message });
    } else {
      this.logsService.insertLog({ text, module });
      console.log(text);
      reply.status(400).send({ message: "Неизвестная ошибка" });
    }
  }
}
