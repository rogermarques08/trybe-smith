import express from 'express';
import productsController from '../controllers/products.controller';

const productsRoutes = express.Router();

productsRoutes.get('/', productsController.getAllProducts);

export default productsRoutes;