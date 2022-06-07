import Item from './Item.js';

const itemsDAL = {
  new: (dbRow) => {
    const item = new Item();
    item.id = dbRow.id;
    item.name = dbRow.name;
    item.type = dbRow.type;
    item.quantity = dbRow.quantity;
    return item;
  },
  add: ({ name, type, quantity }) => {
    // db call insert
    const row = {
      id: 45,
      name,
      type,
      quantity,
    };
    const item = itemsDAL.new(row);
    return item;
  },
  get: (id) => {
    // db call
    // database select

    const row = {
      id: Number(id),
      name: 'item from db',
      type: 'TYPE_B',
      quantity: 10,
    };

    const item = itemsDAL.new(row);
    return item;
  },
};

export default itemsDAL;
