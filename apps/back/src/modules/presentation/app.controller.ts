import { FastifyReply } from "fastify";
import { ZodSchema } from "zod";
import { LogsService } from "../domain/logs/logs.service";
import { LogsRepository } from "../infrastructure/logs/logs.repostiory";
import { db } from "@back/db";
import { EModule } from "@back/enums/module.enum";

export class AppController {
  private logsRepository = new LogsRepository();
  private logsService = new LogsService(this.logsRepository);

  protected validateZod<T>(schema: ZodSchema<T>, data: unknown) {
    try {
      return schema.parse(data);
    } catch (error) {
      throw error;
    }
  }
  protected handlerError({
    module,
    error,
    reply,
    method,
    userId,
  }: {
    module: EModule;
    error: unknown;
    reply: FastifyReply;
    method: string;
    userId?: string;
  }) {
    if (error instanceof Error) {
      this.logsService.insertLog({
        text: error.message,
        module,
        userId,
        method,
      });
      console.log(error.message);
      reply.status(400).send({ message: error.message });
    } else {
      this.logsService.insertLog({ text: method, module });
      console.log(method);
      reply.status(400).send({ message: "Неизвестная ошибка" });
    }
  }
}
