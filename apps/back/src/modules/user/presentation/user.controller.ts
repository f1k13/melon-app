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
      this.handlerError(
        "Ошибка в user.controller.auth",
        error,
        ctx.reply,
        EModule.USER
      );
    }
  }
}
