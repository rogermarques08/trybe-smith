import express from 'express';
import productsController from '../controllers/products.controller';

const productsRoutes = express.Router();

productsRoutes.get('/', productsController.getAllProducts);

productsRoutes.post('/', productsController.createProduct);

export default productsRoutes;