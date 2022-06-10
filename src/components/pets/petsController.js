import combine from 'swagger-combine';
import logger from '../../logger.js';
import { validateInput } from '../../validator.js';
import petsService from './petsService.js';

const get = async (petId) => {
  logger.info('petsController:get', petId);

  const pet = await petsService.get(petId);
  return pet;

  // output like openapi specs
};

const list = async ({ size }) => {
  const pets = await petsService.list({ size });
  return pets;
};

const create = async ({ name, age, size }) => {
  logger.info('petsController:create', { name, age, size });
  const petSchema = await combine('./docs/schemas/petPreview.yml', { format: 'yml' });
  validateInput(petSchema, { name, age, size });

  const pet = await petsService.create({ name, age, size });
  return pet;
};

const petsController = {
  get,
  list,
  create,
};

export default petsController;
