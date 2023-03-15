import { RowDataPacket } from 'mysql2';
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

const ordersModel = {
  getAllOrders,
};

export default ordersModel;