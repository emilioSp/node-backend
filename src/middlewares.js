import logger from './logger.js';

export const logRoute = async (ctx, next) => {
  const start = new Date();

  try {
    await next();
  } finally {
    const end = new Date();

    const info = {
      time: end.toISOString(),
      ip: ctx.ips.length > 0 ? ctx.ips[0] : ctx.ip,
      method: ctx.method,
      url: ctx.originalUrl,
      duration: `${end.getTime() - start.getTime()}ms`,
      status: ctx.status,
    };

    logger.info(info);
  }
};
