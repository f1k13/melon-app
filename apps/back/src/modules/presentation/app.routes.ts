import { bindController } from "@back/utils/bind-controller";

export class AppRoutes {
  protected bindController<T extends object>(controller: T) {
    return bindController(controller);
  }
}
