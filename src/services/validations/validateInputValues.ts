import { ILogin, IProduct, ITypeMessage, IUser } from '../../interfaces';
import { loginSchema, productSchema, userSchema } from './schema';

export const validateLogin = ({ username, password }: ILogin): ITypeMessage => {
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

export const validateUser = (user: IUser): ITypeMessage => {
  const { error } = userSchema.validate(user);

  if (error) {
    return { 
      type: error.message.includes('required') ? 'FIELDS_MISSING' : 'INCORRECT_TYPE', 
      message: error.message };
  }

  return { type: 'null', message: '' };
};