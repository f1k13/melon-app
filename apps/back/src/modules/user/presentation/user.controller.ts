import { userAuthSchema, userProfileSchema } from "./../model/user.model";
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
      this.handlerSuccess({
        module: EModule.USER,
        method: "userController.auth",
        text: "Успешная авторизация",
      });
      ctx.reply.status(200).send({
        message: "Успешная авторизация",
        ...user,
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
      this.handlerSuccess({
        module: EModule.USER,
        method: "userController.getMe",
        text: "getMe success",
        userId,
      });
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
  public async profileUpdate(ctx: ICtx) {
    try {
      const userId = ctx.req.user.userId;
      const payload = {
        ...(ctx.req.body as Object),
        userId,
      };
      const data = this.validateZod(userProfileSchema, payload);
      const user = await this.userService.updateProfile(data);
      this.handlerSuccess({
        module: EModule.USER,
        method: "userController.profileUpdate",
        text: "profileUpdate success",
        userId,
      });
      ctx.reply.status(200).send(user);
    } catch (error) {
      this.handlerError({
        module: EModule.USER,
        method: "userController.profileUpdate",
        error,
        reply: ctx.reply,
        userId: ctx.req.user.userId,
      });
    }
  }
  public async getAllInterests(ctx: ICtx) {
    try {
      const userId = ctx.req.user.userId;
      const data = await this.userService.getAllInterests();
      this.handlerSuccess({
        module: EModule.USER,
        method: "userController.profileUpdate",
        text: "profileUpdate success",
        userId,
      });
      ctx.reply.status(200).send(data);
    } catch (error) {
      this.handlerError({
        module: EModule.USER,
        method: "userController.getAllInterests",
        error,
        reply: ctx.reply,
        userId: ctx.req.user.userId,
      });
    }
  }
}
