import { ITypes } from '../interfaces';

const types: ITypes = {
  SUCESS: 200,
  CREATED: 201,
  FIELDS_MISSING: 400,
  INCORRECT_FIELDS: 401,
  INCORRECT_TYPE: 422,
};

const mapTypes = (type: string): number => types[type] || 500;

export default mapTypes;