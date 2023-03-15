import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { IUser } from '../interfaces';
import connection from './connection';

const createUser = async (
  username: string,
  vocation: string,
  level: number,
  password: string,
) => {
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?,?,?,?)',
    [username, vocation, level, password],
  );
    
  return insertId; 
};

const getUserByLogin = async (username: string, password: string): Promise<IUser> => {
  const [[user]] = await connection.execute<RowDataPacket[] & IUser[]>(
    'SELECT * FROM Trybesmith.users WHERE username = ? AND password = ?',
    [username, password],
  );

  return user;
};

const getUserById = async (id: number): Promise<IUser> => {
  const [[user]] = await connection.execute<RowDataPacket[] & IUser[]>(
    'SELECT * FROM Trybesmith.users WHERE id = ?',
    [id],
  );

  return user;
};

const usersModel = {
  createUser,
  getUserByLogin,
  getUserById,
};

export default usersModel;