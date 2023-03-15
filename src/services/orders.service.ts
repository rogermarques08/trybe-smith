import { ITypeMessage, IUser } from '../interfaces';
import ordersModel from '../models/orders.model';
import productsModel from '../models/products.model';
import usersModel from '../models/users.model';
import { validateOrders } from './validations/validateInputValues';

const getALlOrders = async (): Promise<ITypeMessage> => {
  const orders = await ordersModel.getAllOrders();

  return { type: 'SUCESS', message: orders };
};

const createOrder = async (user: IUser, products: number[]) => {
  const validate = validateOrders({ productsIds: products });

  if (validate.type !== 'null') return validate;

  const userId = await usersModel.getUserByLogin(user.username, user.password);
  if (!userId) return { type: 'NOT_FOUND', message: 'User not found' };
        
  const orderId = await ordersModel.createOrder(userId.id);
      
  Promise.all(products.map(async (product) => productsModel.updateOrderProduct(orderId, product)));

  return { type: 'CREATED', message: { userId: userId.id, productsIds: products } };
};

const ordersService = {
  getALlOrders,
  createOrder,
};

export default ordersService;