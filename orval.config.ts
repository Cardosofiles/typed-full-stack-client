import { defineConfig } from "orval";

export default defineConfig({
  api: {
    input:
      "../../../node-js/rocketseat/typed-full-stack-server/src/swagger.json",
    output: {
      clean: true,
      target: "./src/http/generated/api.ts",
      mode: "tags-split",
      httpClient: "fetch",
      client: "react-query",
      baseUrl: "http://localhost:3333",
    },
  },
});
