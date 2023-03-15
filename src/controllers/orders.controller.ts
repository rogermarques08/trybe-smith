import { Request, Response } from 'express';
import { ITypeMessage } from '../interfaces';
import ordersService from '../services/orders.service';
import mapTypes from '../utils/mapType';

const getALlOrders = async (req: Request, res: Response) => {
  const { type, message } = await ordersService.getALlOrders();

  return res.status(mapTypes(type)).json(message);
};

const createOrder = async (req: Request, res: Response) => {
  const { user, productsIds } = req.body; 

  const { type, message } = await ordersService.createOrder(user, productsIds) as ITypeMessage;
  if (type === 'CREATED') return res.status(mapTypes(type)).json(message);
  
  return res.status(mapTypes(type)).json({ message });
};
  
const ordersController = { getALlOrders, createOrder };

export default ordersController;