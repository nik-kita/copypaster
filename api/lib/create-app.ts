import { OpenAPIHono } from "@hono/zod-openapi";
import { notFound, onError, serveEmojiFavicon } from "stoker/middlewares";
import { defaultHook } from "stoker/openapi";
import { pino_logger } from "../middlewares/pino-logger.ts";
import type { AppBindings, AppOpenAPI } from "../types.ts";

export function createRouter() {
  return new OpenAPIHono<AppBindings>({
    strict: false,
    defaultHook,
  });
}

export default function createApp() {
  const app = createRouter();
  app.use(serveEmojiFavicon("🔥"));
  app.use(pino_logger());

  app.notFound(notFound);
  app.onError((err, c) => {
    console.error(err);
    return onError(err, c);
  });
  return app;
}

export function createTestApp<R extends AppOpenAPI>(router: R) {
  return createApp().route("/", router);
}
