import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import router from './routes/articles';

const app = new Koa();
app.use(bodyParser());
app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
