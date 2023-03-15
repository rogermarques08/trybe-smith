import express from 'express';
import ordersController from '../controllers/orders.controller';
import validateJWT from '../middlewares/validateJWT';

const ordersRoutes = express.Router();

ordersRoutes.get('/', ordersController.getALlOrders);

ordersRoutes.post('/', validateJWT, ordersController.createOrder);

export default ordersRoutes;