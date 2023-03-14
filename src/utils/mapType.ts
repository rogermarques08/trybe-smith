import { ITypes } from '../interfaces';

const types: ITypes = {
  SUCESS: 200,
};

const mapTypes = (type: string): number => types[type] || 500;

export default mapTypes;