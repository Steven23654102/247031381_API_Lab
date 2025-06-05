// routes/specials.ts
import Router, { RouterContext } from "koa-router";

const router = new Router({ prefix: "/api/v1" });

// Public route
router.get("/", async (ctx: RouterContext) => {
  ctx.body = { message: "This is a public route." };
});

// Protected route 
router.get("/private", async (ctx: RouterContext) => {
  ctx.body = { message: "This is a protected route (todo: add auth)." };
});

export { router };
