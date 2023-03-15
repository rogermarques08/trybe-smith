import { Request, Response } from 'express';
import ordersService from '../services/orders.service';
import mapTypes from '../utils/mapType';

const getALlOrders = async (req: Request, res: Response) => {
  const { type, message } = await ordersService.getALlOrders();

  return res.status(mapTypes(type)).json(message);
};

const ordersController = { getALlOrders };

export default ordersController;