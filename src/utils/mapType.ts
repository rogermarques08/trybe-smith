import { ITypes } from '../interfaces';

const types: ITypes = {
  SUCESS: 200,
  CREATED: 201,
  INCORRECT_FIELDS: 401,
  FIELDS_MISSING: 400,
};

const mapTypes = (type: string): number => types[type] || 500;

export default mapTypes;