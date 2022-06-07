import logger from '../../logger.js';
import itemsDAL from './itemsDAL.js';

export const createItemService = ({ name, type }) => {
  logger.info('createItemService start', { name, type });
  const quantity = computeItemQuantity({ name, type });
  const item = itemsDAL.add({ name, type, quantity });
  return item;
};

// eslint-config
export const computeItemQuantity = ({ name, type }) => {
  // algo to compute item quantity
  // ..
  // ..

  const quantity = 10;
  return quantity;
};

export const getItemService = (id) => {
  logger.info('getItemService start', { id });
  const item = itemsDAL.get(id);
  return item;
};
