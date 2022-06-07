import { readFile } from 'fs/promises';
import Router from '@koa/router';
import { createItemController, getItemController } from './components/items/itemsController.js';
const { version } = JSON.parse((await readFile('./package.json')).toString());

const router = Router();

router.get('/healthcheck', (ctx) => {
  ctx.body = { version: version };
});

router.post('/echo', (ctx) => {
  ctx.body = ctx.request.body;
});

router.post('/item', (ctx) => {
  const item = createItemController(ctx.request.body);
  ctx.body = item;
});

router.get('/item/:itemId', (ctx) => {
  const item = getItemController(ctx.params.itemId);
  ctx.body = item;
});

export default router;
