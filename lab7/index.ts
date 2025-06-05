import Koa from "koa";
import bodyParser from "koa-bodyparser";
import { router as articleRoutes } from "./routes/articles";
import { router as specialRoutes } from "./routes/specials";
import { router as protectedRoutes } from "./routes/protected";
import { passport } from "./controllers/auth";


const app = new Koa();

app.use(bodyParser());
app.use(passport.initialize());
app.use(protectedRoutes.routes());
app.use(articleRoutes.routes());
app.use(specialRoutes.routes());

app.listen(3002, () => {
  console.log("Server running at http://localhost:3002");
});
