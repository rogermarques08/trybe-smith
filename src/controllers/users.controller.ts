import { Request, Response } from 'express';
import usersService from '../services/users.service';
import mapTypes from '../utils/mapType';

const createUser = async (req: Request, res: Response) => {
  const user = req.body;

  const { type, message } = await usersService.createUser(user);

  if (type === 'CREATED') return res.status(mapTypes(type)).json({ token: message });

  return res.status(mapTypes(type)).json({ message });
};

const usersController = {
  createUser,
};

export default usersController;