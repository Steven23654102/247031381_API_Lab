import Router, { RouterContext } from 'koa-router';
import { basicAuth } from '../controllers/auth';

const router = new Router({ prefix: '/api/v1' });

router.get('/private', basicAuth, privateAPI);

// Add a protected route that requires authentication
function privateAPI(ctx: RouterContext, next: any) {
  const user = ctx.state.user;
  ctx.body = {
    message: `Hello ${user.user.username} you registered on ${user.user.dateregistered}`
  };
}

export default router; 
