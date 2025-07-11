import { userAuthSchema } from "./../model/user.model";
import { AppController } from "@back/modules/presentation/app.controller";
import { UserService } from "../domain/user.service";
import { ICtx } from "@back/utils/bind-controller";

export class UserController extends AppController {
  userService: UserService;
  constructor(userService: UserService) {
    super();
    this.userService = userService;
  }

  public async auth(ctx: ICtx) {
    try {
      const data = this.validateZod(userAuthSchema, ctx.req.body);
      await this.userService.auth(data);
      ctx.reply.status(200).send({
        message: "Успешная авторизация",
      });
    } catch (error) {
      ctx.reply.status(400).send({
        message: error,
      });
    }
  }
}
