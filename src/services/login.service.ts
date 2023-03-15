import getToken from '../auth/auth';
import { ITypeMessage } from '../interfaces';
import usersModel from '../models/users.model';
import { validateLogin } from './validations/validateInputValues';

const login = async (username: string, password: string): Promise<ITypeMessage> => {
  const validate = validateLogin({ username, password });

  if (validate.type !== 'null') return validate;
  
  const getUser = await usersModel.getUserByLogin(username, password);

  if (getUser) {
    const token = getToken(username, password);
    return { type: 'SUCESS', message: token };
  }

  return { type: 'INCORRECT_FIELDS', message: 'Username or password invalid' };
};

const loginService = { login };

export default loginService;