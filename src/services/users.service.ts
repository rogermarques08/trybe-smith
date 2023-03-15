import { createToken } from '../auth/auth';
import { ITypeMessage, IUser } from '../interfaces';
import usersModel from '../models/users.model';
import { validateUser } from './validations/validateInputValues';

const createUser = async (user: IUser): Promise<ITypeMessage> => {
  const { username, vocation, level, password } = user;

  const validate = validateUser(user);
  if (validate.type !== 'null') return validate;
  
  await usersModel.createUser(
    username,
    vocation,
    level,
    password,
  );
  
  const token = createToken(username, password);

  return { type: 'CREATED', message: token };
};

const usersService = {
  createUser,
};

export default usersService;
