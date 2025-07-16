import { FastifyInstance, FastifyPluginOptions } from "fastify";
import { UserController } from "./user.controller";
import { AppRoutes } from "@back/modules/presentation/app.routes";

export class UserRoutes extends AppRoutes {
  app: FastifyInstance;
  userController: UserController;
  constructor(app: FastifyInstance, userController: UserController) {
    super();
    this.app = app;
    this.userController = userController;
  }

  public register() {
    const bind = this.bindController(this.userController);
    return async (router: FastifyInstance, _opts: FastifyPluginOptions) => {
      router.post("/user/auth", bind("auth"));
      router.get("/user/index", this.use(this.auth), bind("getMe"));
      router.post(
        "/user/profile-update",
        this.use(this.auth),
        bind("profileUpdate")
      );
      router.get(
        "/user/get-all-interests",
        this.use(this.auth),
        bind("getAllInterests")
      );
    };
  }
}
