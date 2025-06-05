import Router from "koa-router";
import passport from "koa-passport";

const router = new Router({ prefix: "/api/v1" });

router.get("/protected", passport.authenticate("basic", { session: false }), async (ctx) => {
  ctx.body = { message: " You are authenticated!", user: ctx.state.user };
});

export { router };
