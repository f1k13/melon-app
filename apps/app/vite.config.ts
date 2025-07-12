import { defineConfig } from "vite";
import fs from "fs";
import path from "path";
// https://vite.dev/config/

export default defineConfig({
  server: {
    host: "0.0.0.0",
    port: 5173,
    https: {
      key: fs.readFileSync(path.resolve(__dirname, "localhost-key.pem")),
      cert: fs.readFileSync(path.resolve(__dirname, "localhost.pem")),
    },
  },
});
