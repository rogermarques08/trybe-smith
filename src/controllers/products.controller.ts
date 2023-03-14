import { Request, Response } from 'express';
import productsService from '../services/products.service';
import mapTypes from '../utils/mapType';

const getAllProducts = async (_req: Request, res: Response) => {
  const { type, message } = await productsService.getAllProducts();

  return res.status(mapTypes(type)).json(message);
};

const productsController = {
  getAllProducts,
};

export default productsController;