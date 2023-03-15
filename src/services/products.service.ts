import { ITypeMessage } from '../interfaces';
import productsModel from '../models/products.model';
import { validateProduct } from './validations/validateInputValues';

const getAllProducts = async (): Promise<ITypeMessage> => {
  const products = await productsModel.getAllProducts();

  return { type: 'SUCESS', message: products };
};

const createProduct = async (name: string, amount: string): Promise<ITypeMessage> => {
  const validate = validateProduct({ name, amount });
  if (validate.type !== 'null') return validate;

  const idCreated = await productsModel.createProduct(name, amount);
  const getProduct = await productsModel.getAllProductById(idCreated);
  
  return { type: 'CREATED', message: getProduct };
};

const productsService = {
  getAllProducts,
  createProduct,
};

export default productsService;
