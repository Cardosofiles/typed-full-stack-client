import { defineConfig } from "orval";

export default defineConfig({
  api: {
    input:
      "../../../node-js/rocketseat/typed-full-stack-server/src/swagger.json",
    output: {
      target: "./src/http/generated/api.ts",
      httpClient: "fetch",
      client: "react-query",
      baseUrl: "http://localhost:3333",
    },
  },
});
