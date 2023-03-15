import { ILogin, IProduct, ITypeMessage } from '../../interfaces';
import { loginSchema, productSchema } from './schema';

export const validateUser = ({ username, password }: ILogin): ITypeMessage => {
  const { error } = loginSchema.validate({ username, password });

  if (error) return { type: 'FIELDS_MISSING', message: error.message };

  return { type: 'null', message: '' };
};

export const validateProduct = ({ name, amount }: IProduct): ITypeMessage => {
  const { error } = productSchema.validate({ name, amount });

  if (error) {
    return { 
      type: error.message.includes('required') ? 'FIELDS_MISSING' : 'INCORRECT_TYPE', 
      message: error.message };
  }

  return { type: 'null', message: '' };
};
