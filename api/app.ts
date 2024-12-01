import { serveStatic } from "hono/deno";
import configureOpenAPI from "./lib/configure-openapi.ts";
import createApp from "./lib/create-app.ts";
import { join } from "@std/path";

const app = createApp();

configureOpenAPI(app);

const routes = [] as const;

routes.forEach((route) => {
  app.route("/", route);
});

const root = join(Deno.cwd(), "dist");
console.log("Serving static files from", root);
app.use("/*", serveStatic({ root }));

export type AppType = typeof routes[number];

export default app;
