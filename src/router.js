import { readFile } from 'fs/promises';
import Router from '@koa/router';
import petsController from './components/pets/petsController.js';
const { version } = JSON.parse((await readFile('./package.json')).toString());

const router = Router();

router.get('/healthcheck', (ctx) => {
  ctx.body = { version: version };
});

router.get('/pets/:petId', async (ctx) => {
  const p = await petsController.get(ctx.params.petId);
  ctx.body = p;
});

router.get('/pets/', async (ctx) => {
  const pets = await petsController.list({ size: ctx.query.size });
  ctx.body = pets;
});

router.post('/pets/', async (ctx) => {
  const pet = await petsController.create(ctx.request.body);
  ctx.body = pet;
});

export default router;
