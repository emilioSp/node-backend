import { nanoid } from 'nanoid';
import asyncLocalStorage from './asyncStorage.js';
import logger from './logger.js';
import APIError from './APIError.js';

export const errorManager = async (ctx, next) => {
  try {
    await next();
  } catch (error) {
    if (error instanceof APIError) {
      // controlled errors
      ctx.status = error.http_code;
      ctx.body = error;
    } else {
      // uncontrolled errors
      logger.error(error);
      ctx.status = 500;
      ctx.body = 'Internal server error.';
    }
  }
};

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

export const requestTracking = async (ctx, next) => {
  const store = { transactionId: nanoid() };
  asyncLocalStorage.enterWith(store);
  await next();
};
