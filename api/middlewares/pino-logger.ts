import { pinoLogger } from "hono-pino";
import { pino } from "pino";
import pretty from "pino-pretty";

import env from "../env.ts";

export function pino_logger() {
  return pinoLogger({
    pino: pino({
      level: env.LOG_LEVEL || "info",
    }, pretty()),
    http: {
      reqId: () => crypto.randomUUID(),
    },
  });
}
