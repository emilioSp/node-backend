import http from 'http';
import koa from 'koa';
import cors from '@koa/cors';
import body from 'koa-body';
import router from './router.js';
import { errorManager, logRoute, requestTracking } from './middlewares.js';
import logger from './logger.js';

process.on('uncaughtException', (e) => logger.error('uncaughtException', e));
process.on('unhandledRejection', (e) => logger.error('unhandledRejection', e));

const app = new koa();
app.use(cors());
app.use(body({ jsonLimit: '16mb' }));

app.use(requestTracking);

app.use(logRoute);
app.use(errorManager);
app.use(router.routes());
app.use(router.allowedMethods());

const server = http.createServer(app.callback());

server.listen(80, async (error) => {
  error ? logger.error(error) : logger.info('http serving on port 80');
});
