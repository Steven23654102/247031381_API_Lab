import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import router from '../routes';

const app = new Koa();
app.use(bodyParser());
app.use(router.routes()).use(router.allowedMethods());

export default app;
