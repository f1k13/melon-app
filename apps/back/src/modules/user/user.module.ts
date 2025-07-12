import { UserController } from "./presentation/user.controller";
import { DIContainer } from "@back/di";
import { UserRepository } from "./infrastructure/user.repository";
import { db } from "@back/db";
import { UserService } from "./domain/user.service";
import { EModule } from "@back/enums/module.enum";
import { FastifyInstance } from "fastify";
import { UserRoutes } from "./presentation/user.routes";
import { LogsRepository } from "../infrastructure/logs/logs.repostiory";

export class UserModule {
  static register(container: DIContainer, app: FastifyInstance) {
    const userRepository = new UserRepository(db);
    const userService = new UserService(userRepository);
    const userController = new UserController(userService);
    const userRoutes = new UserRoutes(app, userController);
    container.register(EModule.USER, userRoutes);
  }
}
