import getToken from '../auth/auth';
import { IUser } from '../interfaces';
import usersModel from '../models/users.model';

const createUser = async (user: IUser) => {
  const { username, vocation, level, password } = user;
  
  await usersModel.createUser(
    username,
    vocation,
    level,
    password,
  );
  
  const token = getToken(username, password);

  return { type: 'CREATED', message: token };
};

const usersService = {
  createUser,
};

export default usersService;
