import { Request, Response } from 'express';
import loginService from '../services/login.service';
import mapTypes from '../utils/mapType';

const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  const { type, message } = await loginService.login(username, password);
  if (type === 'SUCESS') return res.status(mapTypes(type)).json({ token: message });

  return res.status(mapTypes(type)).json({ message });
};

const loginController = { login };

export default loginController;