import database, { removeUndefinedFilters } from './index.js';

await database.execute('insert into pets (name, age, size) values (:name, :age, :size)', {
  name: 'pippo',
  age: 10,
  size: 'x-large',
});

const getPet = async ({ name, age } = {}) => {
  const query = removeUndefinedFilters(
    `
    SELECT * 
    FROM pets 
    WHERE 1 
        AND name = :name
        AND age >= :age`,
    { name, age }
  );

  const [r] = await database.execute(query, { name, age });
  return r;
};

const r = await getPet();
console.log(r);
