import Router, { RouterContext } from "koa-router";
import bodyParser from "koa-bodyparser";

const router = new Router({ prefix: "/api/v1/articles" });

interface Article {
  id: number;
  title: string;
  fullText: string;
  creationDate: Date;
  editedDate: Date | null;
  views: number;
}


let articles: Article[] = [
  {
    id: 1,
    title: "Hello Article",
    fullText: "This is a sample article.",
    creationDate: new Date(),
    editedDate: null,
    views: 0,
  },
];

// GET /api/v1/articles
router.get("/", async (ctx: RouterContext) => {
  ctx.body = articles;
});

// GET /api/v1/articles/:id
router.get("/:id", async (ctx: RouterContext) => {
  const id = +ctx.params.id;
  const article = articles.find((a) => a.id === id);
  if (article) {
    article.views++;
    ctx.body = article;
  } else {
    ctx.status = 404;
    ctx.body = { error: "Article not found" };
  }
});

// POST /api/v1/articles
router.post("/", bodyParser(), async (ctx: RouterContext) => {
  const { title, fullText } = ctx.request.body as {
    title: string;
    fullText: string;
  };

  if (!title || !fullText) {
    ctx.status = 400;
    ctx.body = { error: "Missing title or fullText" };
    return;
  }

  const newArticle: Article = {
    id: articles.length + 1,
    title,
    fullText,
    creationDate: new Date(),
    editedDate: null,
    views: 0,
  };

  articles.push(newArticle);
  ctx.status = 201;
  ctx.body = newArticle;
});

// PUT /api/v1/articles/:id
router.put("/:id", bodyParser(), async (ctx: RouterContext) => {
  const id = +ctx.params.id;
  const article = articles.find((a) => a.id === id);

  if (!article) {
    ctx.status = 404;
    ctx.body = { error: "Article not found" };
    return;
  }

  const { title, fullText } = ctx.request.body as {
    title: string;
    fullText: string;
  };

  if (!title || !fullText) {
    ctx.status = 400;
    ctx.body = { error: "Missing title or fullText" };
    return;
  }

  article.title = title;
  article.fullText = fullText;
  article.editedDate = new Date();

  ctx.body = article;
});

// DELETE /api/v1/articles/:id
router.del("/:id", async (ctx: RouterContext) => {
  const id = +ctx.params.id;
  const index = articles.findIndex((a) => a.id === id);

  if (index === -1) {
    ctx.status = 404;
    ctx.body = { error: "Article not found" };
    return;
  }

  const deleted = articles.splice(index, 1);
  ctx.body = deleted[0];
});

export { router };
