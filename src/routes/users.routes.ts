import express from 'express';
import usersController from '../controllers/users.controller';

const usersRoutes = express.Router();

usersRoutes.post('/', usersController.createUser);

export default usersRoutes;