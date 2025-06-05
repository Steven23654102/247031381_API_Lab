import { Context, Next } from 'koa';

export const authMiddleware = async (ctx: Context, next: Next) => {

  const header = ctx.headers['authorization'];

  if (!header || !header.startsWith('Basic ')) {
    ctx.status = 401;
    ctx.body = { error: 'Missing Authorization header' };
    return;
  }

  const base64 = header.split(' ')[1];
  const decoded = Buffer.from(base64, 'base64').toString(); // admin:1234

  const [username, password] = decoded.split(':');
  if (username === 'admin' && password === '1234') {
    await next();
  } else {
    ctx.status = 401;
    ctx.body = { error: 'Invalid credentials' };
  }
};
