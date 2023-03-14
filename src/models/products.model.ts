import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { IProduct } from '../interfaces';
import connection from './connection';

const getAllProducts = async (): Promise<IProduct[]> => {
  const [rows] = await connection.execute<RowDataPacket[] & IProduct[]>(
    'SELECT * FROM Trybesmith.products',
  );

  return rows;
};

const getAllProductById = async (id: number): Promise<IProduct> => {
  const [[product]] = await connection.execute<RowDataPacket[] & IProduct[]>(
    'SELECT id, name, amount FROM Trybesmith.products WHERE id = ?',
    [id],
  );

  return product;
};

const createProduct = async (name: string, amount: string) => {
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.products (name, amount) VALUES (?,?)',
    [name, amount],
  );

  return insertId;
};

const productsModel = {
  getAllProducts,
  createProduct,
  getAllProductById,
};

export default productsModel;
