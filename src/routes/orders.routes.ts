import express from 'express';
import ordersController from '../controllers/orders.controller';

const ordersRoutes = express.Router();

ordersRoutes.get('/', ordersController.getALlOrders);

export default ordersRoutes;