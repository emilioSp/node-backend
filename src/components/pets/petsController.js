import petsService from './petsService.js';

const get = async (petId) => {
  // validation

  const pet = await petsService.get(petId);
  return pet;

  // output like openapi specs
};

const list = async ({ size }) => {
  const pets = await petsService.list({ size });
  return pets;
};

const create = async ({ name, age, size }) => {
  const pet = await petsService.create({ name, age, size });
  return pet;
};

const petsController = {
  get,
  list,
  create,
};

export default petsController;
