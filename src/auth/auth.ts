import jwt, { SignOptions } from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'supersecret';

const config: SignOptions = {
  algorithm: 'HS256',
  expiresIn: '1d',
};

export const createToken = (username: string, password: string) => jwt.sign(
  { username, password },
  secret,
  config,
);

export default createToken;