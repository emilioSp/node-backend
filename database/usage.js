import database from './index.js';

await database.execute('insert into pets (name, age, size) values (:name, :age, :size)', {
  name: 'pippo',
  age: 10,
  size: 'x-large',
});

const [rows] = await database.execute('select * from pets');

console.log(rows);
