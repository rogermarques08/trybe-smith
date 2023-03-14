import { ITypeMessage } from '../interfaces';
import productsModel from '../models/products.model';

const getAllProducts = async (): Promise<ITypeMessage> => {
  const products = await productsModel.getAllProducts();

  return { type: 'SUCESS', message: products };
};

const productsService = {
  getAllProducts,
};

export default productsService;
