import http from 'http';
import koa from 'koa';
import cors from '@koa/cors';
import body from 'koa-body';
import router from './router.js';

process.on('uncaughtException', (e) => console.error('uncaughtException', e));
process.on('unhandledRejection', (e) => console.error('unhandledRejection', e));

const body_limits = {
  formLimit: '64mb',
  jsonLimit: '64mb',
  formidable: { maxFileSize: '64mb', multiples: true },
  multipart: true,
};

const app = new koa();
app.use(cors());
app.use(body(body_limits));

app.use(router.routes());

const server = http.createServer(app.callback());

server.listen(8080, async (error) => {
  if (error) {
    console.error(error);
  } else if (process.env.NODE_ENV !== 'test') {
    console.log(`http serving on port 8080`);
  }
});
