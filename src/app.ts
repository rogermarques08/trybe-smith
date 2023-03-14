import express from 'express';
import LoginRoutes from './routes/login.routes';
import productsRoutes from './routes/products.routes';
import usersRoutes from './routes/users.routes';

const app = express();

app.use(express.json());

app.use('/products', productsRoutes);

app.use('/users', usersRoutes);

app.use('/login', LoginRoutes);

export default app;
