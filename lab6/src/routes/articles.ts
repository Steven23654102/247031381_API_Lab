import Router from 'koa-router';
import * as model from '../models/articles';

const router = new Router({ prefix: '/api/articles' });

router.get('/', async (ctx) => {
  ctx.body = await model.getAll();
});

router.get('/:id', async (ctx) => {
  const id = Number(ctx.params.id);
  const result = await model.getById(id);
  ctx.body = result.length ? result[0] : { error: 'Not found' };
});

export default router;
