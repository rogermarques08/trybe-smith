import express from 'express';
import loginController from '../controllers/login.controller';

const LoginRoutes = express.Router();

LoginRoutes.post('/', loginController.login);

export default LoginRoutes;