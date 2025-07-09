import { FastifyInstance } from "fastify";
import { UserController } from "./user.controller";

export class UserRoutes {
  app: FastifyInstance;
  userController: UserController;
  constructor(app: FastifyInstance, userController: UserController) {
    this.app = app;
    this.userController = userController;
  }

  public register() {
    this.app.get("/users", this.userController.create);
  }
}
