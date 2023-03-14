import { ResultSetHeader } from 'mysql2';
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

const usersModel = {
  createUser,
};

export default usersModel;