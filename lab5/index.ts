import { router as articlesRouter } from "./routes/articles";

import Koa from "koa";
import Router from "koa-router";
import logger from "koa-logger";
import json from "koa-json";

const app = new Koa();
const router = new Router();

router.get("/api/v1", async (ctx, next) => {
  ctx.body = { message: "Welcome to the blog API!" };
  await next();
});

app.use(logger());
app.use(json());
app.use(router.routes());
app.use(articlesRouter.routes());

app.listen(10888, () => {
  console.log("Koa Started on port 10888");
});
