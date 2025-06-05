import { Context, Next } from "koa";
import { validate } from "jsonschema";

const articleSchema = {
  type: "object",
  required: ["title", "content"],
  properties: {
    title: { type: "string" },
    content: { type: "string" }
  },
  additionalProperties: false
};

export async function validateArticle(ctx: Context, next: Next) {
  const result = validate(ctx.request.body, articleSchema);

  if (!result.valid) {
    ctx.status = 400;
    ctx.body = {
      message: "Invalid article format",
      errors: result.errors.map(e => e.stack)
    };
    return;
  }

  await next();
}
