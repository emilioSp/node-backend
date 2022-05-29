import { createItemService, getItemService } from './ItemsService.js';

export const createItemController = ({ name, type, quantity }) => {
  // validation

  const item = createItemService({ name, type, quantity });
  return item;
};

export const getItemController = (id) => {
  // validation

  const item = getItemService(id);
  return item;
};
