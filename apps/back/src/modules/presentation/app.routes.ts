import { bindController } from "@back/utils/bind-controller";
import { preHandlerHookHandler } from "fastify";
import { AuthMiddleware } from "../infrastructure/middleware/auth.middleware";

export class AppRoutes {
  protected readonly auth = new AuthMiddleware();
  protected bindController<T extends object>(controller: T) {
    return bindController(controller);
  }
  protected use(middleware: { handle: preHandlerHookHandler }) {
    return { preHandler: middleware.handle.bind(middleware) };
  }
}
