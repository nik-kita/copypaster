import * as HttpStatusPhrases from "stoker/http-status-phrases";
import { createMessageObjectSchema } from "stoker/openapi/schemas";

export const ZOD_ERROR_MESSAGES = {
  REQUIRED: "Required",
  EXPECTED_NUMBER: "Expected number",
  NO_UPDATES: "No updates provided",
  EXPECTED_MONGO_ID_LIKE_STR: "Expected a MongoDB ObjectId-like string",
  EXPECTED_MONGO_ID: "Expected a MongoDB ObjectId",
};

export const ZOD_ERROR_CODES = {
  INVALID_UPDATES: "invalid_updates",
};

export const notFoundSchema = createMessageObjectSchema(
  HttpStatusPhrases.NOT_FOUND,
);
