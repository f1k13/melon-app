import { userAuthSchema } from "./../model/user.model";
import { AppController } from "@back/modules/presentation/app.controller";
import { UserService } from "../domain/user.service";
import { ICtx } from "@back/utils/bind-controller";
import { parse } from "@telegram-apps/init-data-node";
import camelcaseKeys from "camelcase-keys";
import { EModule } from "@back/enums/module.enum";
export class UserController extends AppController {
  userService: UserService;
  constructor(userService: UserService) {
    super();
    this.userService = userService;
  }

  public async auth(ctx: ICtx) {
    try {
      const data = this.validateZod(userAuthSchema, ctx.req.body);
      const initData = parse(data.initData);
      const camelCaseInitData = camelcaseKeys(initData, { deep: true });
      const user = await this.userService.auth(camelCaseInitData);
      ctx.reply.status(200).send({
        message: "Успешная авторизация",
        user,
      });
    } catch (error) {
      this.handlerError({
        module: EModule.USER,
        method: "userController.auth",
        error,
        reply: ctx.reply,
      });
    }
  }
  public async getMe(ctx: ICtx) {
    try {
      const userId = ctx.req.user.userId;
      const user = await this.userService.getUserById({ userId });
      ctx.reply.status(200).send(user);
    } catch (error) {
      this.handlerError({
        module: EModule.USER,
        method: "userController.getMe",
        error,
        reply: ctx.reply,
        userId: ctx.req.user.userId,
      });
    }
  }
}
