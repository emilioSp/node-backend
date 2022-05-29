import ItemsDAL from './ItemsDAL.js';

export const createItemService = (({name, type}) => {
  const quantity = computeItemQuantity({ name, type });
  const item = ItemsDAL.add({name, type, quantity});
  return item;
});

export const computeItemQuantity = ({ name, type }) => {
  // algo to compute item quantity
  // ..
  // ..

  const quantity = 10;
  return quantity;
}

export const getItemService = (id) => {
  const item = ItemsDAL.get(id);
  return item;
}
