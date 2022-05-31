import http from 'http';
import koa from 'koa';
import cors from '@koa/cors';
import body from 'koa-body';
import router from './router.js';
import { errorManager, logRoute } from './middlewares.js';

process.on('uncaughtException', (e) => console.error('uncaughtException', e));
process.on('unhandledRejection', (e) => console.error('unhandledRejection', e));

const app = new koa();
app.use(cors());
app.use(body({ jsonLimit: '16mb' }));

app.use(logRoute);
app.use(errorManager);
app.use(router.routes());
app.use(router.allowedMethods());

const server = http.createServer(app.callback());

server.listen(8080, async (error) => {
  if (error) {
    console.error(error);
  } else if (process.env.NODE_ENV !== 'test') {
    console.log(`http serving on port 8080`);
  }
});
