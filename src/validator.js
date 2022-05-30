import Ajv from 'ajv';
import betterAjvErrors from 'better-ajv-errors';
import logger from './logger.js';

const ajv = new Ajv();

export const validateInput = (jsonSchema, data) => {
  const validate = ajv.compile(jsonSchema);
  const valid = validate(data);
  if (!valid) {
    const output = betterAjvErrors(jsonSchema, data, validate.errors, { format: 'js' });
    logger.error(output);
  }
};
