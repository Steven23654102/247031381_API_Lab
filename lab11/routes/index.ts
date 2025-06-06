import Router from 'koa-router';
import articlesRoutes from './articles';   // default import
import specialsRoutes from './specials';   // default import

const router = new Router();

router.use(articlesRoutes.routes());
router.use(specialsRoutes.routes());

export default router;
