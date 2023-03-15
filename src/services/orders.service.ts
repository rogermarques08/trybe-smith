import { ITypeMessage } from '../interfaces';
import ordersModel from '../models/orders.model';

const getALlOrders = async (): Promise<ITypeMessage> => {
  const orders = await ordersModel.getAllOrders();

  return { type: 'SUCESS', message: orders };
};

const ordersService = {
  getALlOrders,
};

export default ordersService;