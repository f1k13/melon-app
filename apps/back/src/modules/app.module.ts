import { DIContainer } from "@back/di";
import { UserModule } from "./user/user.module";
import { FastifyInstance } from "fastify";
import { LogsRepository } from "./infrastructure/logs/logs.repostiory";
import { db } from "@back/db";

export function createAppContainer(app: FastifyInstance): DIContainer {
  const container = new DIContainer();
  UserModule.register(container, app);

  return container;
}
