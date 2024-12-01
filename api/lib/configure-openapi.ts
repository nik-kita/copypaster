import { apiReference } from "@scalar/hono-api-reference";
import denoJson from "../deno.json" with { type: "json" };
import type { AppOpenAPI } from "../types.ts";

const PATH_TO_OPENAPI = "/doc";
export default function configureOpenAPI(app: AppOpenAPI) {
  app.doc(PATH_TO_OPENAPI, {
    openapi: "3.0.0",
    info: {
      version: denoJson.version,
      title: "API",
    },
  });

  app.get(
    "/api",
    apiReference({
      theme: "kepler",
      layout: "modern",
      defaultHttpClient: {
        targetKey: "javascript",
        clientKey: "fetch",
      },
      spec: {
        url: PATH_TO_OPENAPI,
      },
    }),
  );
}
