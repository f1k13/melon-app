import { PREFIX } from "@back/consts/app";
import { EModule } from "@back/enums/module.enum";
import { createAppContainer } from "@back/modules/app.module";
import Fastify from "fastify";
import cors from "@fastify/cors";
export async function buildApp() {
  const app = Fastify();
  app.decorateRequest("user", null);
  app.register(cors, {
    origin: ["*"],
    allowedHeaders: ["*"],
    methods: ["*"],
  });
  const container = createAppContainer(app);
  const userRoutes = container.get(EModule.USER);
  const allRouters = [userRoutes];
  for (const router of allRouters) {
    app.register(router.register(), { prefix: PREFIX });
  }
  userRoutes.register();
  return app;
}
