import logger from '../../logger.js';
import { validateInput } from '../../validator.js';
import { createItemService, getItemService } from './ItemsService.js';

const createItemSchema = {
  type: 'object',
  properties: {
    name: { type: 'string' },
    type: { type: 'string' },
  },
  required: ['name', 'type'],
};

export const createItemController = ({ name, type }) => {
  logger.info(`createItemController - start`, { name, type });

  validateInput(createItemSchema, { name, type });
  const item = createItemService({ name, type });
  return item;
};

export const getItemController = (id) => {
  // validation

  logger.info(`getItemController - start`, { id });
  const item = getItemService(id);
  return item;
};
