import Koa from "koa";
import Router from "koa-router";
import serve from "koa-static";

const app = new Koa();
const router = new Router();


router.get("/users/:id", ctx => {
  ctx.body = { id: ctx.params.id, name: "Alice" };
});

app.use(serve('./docs')); 
app.use(router.routes());

app.listen(10888, () => {
  console.log("Server running at http://localhost:10888");
});
