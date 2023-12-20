import express from 'express';
import { UserController } from './user.controller';
const router = express.Router();
//all routes are there
router.post('/users', UserController.createUser);

router.get('/users', UserController.getAllUsers);

router.get('/users/:userId', UserController.getSingleUser);

router.put('/users/:userId', UserController.updateUser);

router.delete('/users/:userId', UserController.deleteUser);

router.put('/users/:userId/orders', UserController.addProductToOrder);

router.get('/users/:userId/orders', UserController.getAllOrders);

router.get(
  '/users/:userId/orders/total-price',
  UserController.totalPriceOfProduct,
);

export const UserRoutes = router;
