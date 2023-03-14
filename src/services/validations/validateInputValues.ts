import { ILogin } from '../../interfaces';
import loginSchema from './schema';

const validateUser = ({ username, password }: ILogin) => {
  const { error } = loginSchema.validate({ username, password });

  if (error) return { type: 'FIELDS_MISSING', message: error.message };

  return { type: null, message: '' };
};

export default validateUser;