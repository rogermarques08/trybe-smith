import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { IOrder } from '../interfaces';
import connection from './connection';

const getAllOrders = async (): Promise<IOrder[]> => {
  const [orders] = await connection.execute<RowDataPacket[] & IOrder[]>(
    `SELECT orders.id, orders.user_id AS userId, JSON_ARRAYAGG(products.id) AS productsIds 
     FROM Trybesmith.orders AS orders
     INNER JOIN Trybesmith.products AS products ON orders.id = products.order_id
     GROUP BY orders.user_id, orders.id;`,
  );

  return orders;
};

const getOrdersById = async (id: number): Promise<IOrder> => {
  const [order] = await connection.execute<RowDataPacket[] & IOrder>(
    `SELECT orders.user_id AS userId, JSON_ARRAYAGG(products.id) AS productsIds 
    FROM Trybesmith.orders AS orders 
    INNER JOIN Trybesmith.products AS products ON orders.id = products.order_id
    WHERE orders.id = ?
    GROUP BY orders.user_id, orders.id;`,
    [id],
  );

  return order;
};

const createOrder = async (id: number) : Promise<number> => {
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.orders (user_id) VALUES (?)',
    [id],
  );

  return insertId;
};

const ordersModel = {
  getAllOrders,
  createOrder,
  getOrdersById,
};

export default ordersModel;