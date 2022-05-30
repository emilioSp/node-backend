import logger from '../../logger.js';
import { createItemService, getItemService } from './ItemsService.js';

export const createItemController = ({ name, type, quantity }) => {
  // validation

  logger.info(`createItemController - start`, { name, type, quantity });
  const item = createItemService({ name, type, quantity });
  return item;
};

export const getItemController = (id) => {
  // validation

  logger.info(`getItemController - start`, { id });
  const item = getItemService(id);
  return item;
};
