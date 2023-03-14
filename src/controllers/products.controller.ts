import { Request, Response } from 'express';
import productsService from '../services/products.service';
import mapTypes from '../utils/mapType';

const getAllProducts = async (_req: Request, res: Response) => {
  const { type, message } = await productsService.getAllProducts();

  return res.status(mapTypes(type)).json(message);
};

const createProduct = async (req: Request, res: Response) => {
  const { name, amount } = req.body;

  const { type, message } = await productsService.createProduct(name, amount);

  return res.status(mapTypes(type)).json(message);
};

const productsController = {
  getAllProducts,
  createProduct,
};

export default productsController;