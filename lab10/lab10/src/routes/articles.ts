import Router from 'koa-router';
import { authMiddleware } from '../middleware/auth';

const router = new Router();

// 假資料
let articles: any[] = [
  { id: 1, title: 'Hello', alltext: 'Welcome to Lab 10' },
];

// ✅ 取得所有文章
router.get('/articles', async (ctx) => {
  ctx.body = articles;
});

// ✅ 取得單一文章 by ID
router.get('/articles/:id', async (ctx) => {
  const id = parseInt(ctx.params.id);
  const article = articles.find((a) => a.id === id);

  if (article) {
    ctx.body = article;
  } else {
    ctx.status = 404;
    ctx.body = { error: 'Article not found' };
  }
});

// ✅ 新增文章（需驗證）
router.post('/articles', authMiddleware, async (ctx) => {
  const { title, alltext } = ctx.request.body as { title: string, alltext: string };
  const newArticle = { id: articles.length + 1, title, alltext };
  articles.push(newArticle);
  ctx.status = 201;
  ctx.body = newArticle;
});

export default router;
