import { NextFunction, Request, Response } from 'express';
import { validateToken } from '../auth/auth';
import mapTypes from '../utils/mapType';

const validateJWT = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('Authorization');

  if (!token) return res.status(mapTypes('TOKEN_NOT_FOUND')).json({ message: 'Token not found' });

  try {
    const validate = validateToken(token);
    req.body.user = validate;
  } catch (error) {
    return res.status(mapTypes('INVALID_TOKEN')).json({ message: 'Invalid token' });
  }

  next();
};

export default validateJWT;
