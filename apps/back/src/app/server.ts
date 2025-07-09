import { envConfig } from "@back/env";
import { buildApp } from "./app";
const port = envConfig.PORT;
async function start() {
  const app = await buildApp();

  try {
    await app.listen({ port: parseInt(port) });
    console.log(`server start on port ${port}`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
}

start();
