import { DIContainer } from "@back/di";
import { UserModule } from "./user/user.module";
import { FastifyInstance } from "fastify";

export function createAppContainer(app: FastifyInstance): DIContainer {
  const container = new DIContainer();
  UserModule.register(container, app);

  return container;
}
