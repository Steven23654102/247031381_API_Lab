import Router from "koa-router";
import passport from "koa-passport";
import { validateArticle } from "../schemas/article.schema";


interface Article {
  id: number;
  title: string;
  content: string;
}


const articles: Article[] = [
  { id: 1, title: "Hello", content: "World" },
  { id: 2, title: "Test", content: "123" }
];

const router = new Router({ prefix: "/api/v1/articles" });


router.get("/", async (ctx) => {
  ctx.body = articles;
});


router.post(
  "/",
  passport.authenticate("basic", { session: false }),
  validateArticle,
  async (ctx) => {
    const body = ctx.request.body as { title: string; content: string };

    const newArticle: Article = {
      id: articles.length + 1,
      title: body.title,
      content: body.content
    };

    articles.push(newArticle);
    ctx.status = 201;
    ctx.body = { message: "Article created", article: newArticle };
  }
);

export { router };
