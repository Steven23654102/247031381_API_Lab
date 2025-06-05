import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import cors from '@koa/cors';

import articleRoutes from './routes/articles';

const app = new Koa();
const router = new Router({ prefix: '/api/v1' });

app.use(cors());
app.use(bodyParser());
router.use(articleRoutes.routes());

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(10888, () => {
  console.log('🚀 Server running at http://localhost:10888/api/v1');
});
