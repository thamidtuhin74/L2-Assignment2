import { Request, Response } from 'express';
import { UserServices } from './user.service';

// creating user controller which will use for the POST method
//  to create user to database
const createUser = async (req: Request, res: Response) => {
  try {
    const userData = req.body;
    const result = await UserServices.createUserIntoDb(userData);
    
    const userResponse = result.toJSON();
    delete userResponse.password;

    res.status(200).json({
      success: true,
      message: 'User created successfully!',
      data: userResponse,
    });
  } catch (err: any) {
    res.status(404).json({
      success: false,
      message: 'User not found!',
      error: {
        code: 404,
        description: 'User not found!',
      },
    });
  }
};

// getAllUsers use to get all users from database
//it's a GET method
const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await UserServices.getAllUsersFromDB();
    res.status(200).json({
      success: true,
      message: 'Users fetched successfully!',
      data: result,
    });
  } catch (err: any) {
    res.status(404).json({
      success: false,
      message: 'User not found!',
      error: {
        code: 404,
        description: 'User not found!',
      },
    });
  }
};

// GET Method! get single user |using getSingleUser controller
const getSingleUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const userIdConvert = parseInt(userId);
    const result = await UserServices.getSingleUserFromDB(userIdConvert);
    res.status(200).json({
      success: true,
      message: 'User fetched successfully!',
      data: result,
    });
  } catch (err: any) {
    res.status(404).json({
      success: false,
      message: 'User not found!',
      error: {
        code: 404,
        description: 'User not found!',
      },
    });
  }
};

// PUT Method | updating single user in database using updateUser controller
const updateUser = async (req: Request, res: Response) => {
  try {
    const userId = parseInt(req.params.userId, 10);
    const updatedUserData = req.body;

    const result = await UserServices.updateUserFromDB(userId, updatedUserData);
    delete result?.password;

    res.status(200).json({
      success: true,
      message: 'User updated successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(404).json({
      success: false,
      message: 'User not found!',
      error: {
        code: 404,
        description: 'User not found!',
      },
    });
  }
};

// DELETE Method | delete single user using deleteUser controller
const deleteUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const userIdConvert = parseInt(userId);
    const result = await UserServices.deleteUserFromDB(userIdConvert);
    res.status(200).json({
      success: true,
      message: 'User Deleted Successfully',
      data: result,
    });
  } catch (err: any) {
    res.status(404).json({
      success: false,
      message: 'User not found!',
      error: {
        code: 404,
        description: 'User not found!',
      },
    });
  }
};

// POST Method | add product to the order array -->  Using addProductToOrder controller
const addProductToOrder = async (req: Request, res: Response) => {
  try {
    const userId = parseInt(req.params.userId, 10);
    const newProduct = req.body;

    const updatedUser = await UserServices.addToProductInOrder(
      userId,
      newProduct,
    );

    res.status(200).json({
      success: true,
      message: 'Order created successfully!',
      data: updatedUser,
    });
  } catch (error: any) {
    res.status(404).json({
      success: false,
      message: 'User not found',
      error: {
        code: 404,
        description: 'User not found!',
      },
    });
  }
};

// GET Method | get all order --> getAllOrders controller
const getAllOrders = async (req: Request, res: Response) => {
  try {
    const userId = parseInt(req.params.userId, 10);

    const orders = await UserServices.getAllOrders(userId);

    res.status(200).json({
      success: true,
      message: 'Orders fetched successfully!',
      data: { orders },
    });
  } catch (error: any) {
    res.status(404).json({
      success: false,
      message: 'User not found',
      error: {
        code: 404,
        description: 'User not found!',
      },
    });
  }
};

// Sumation of total cost of all product -> using totalPriceOfProduct controller
const totalPriceOfProduct = async (req: Request, res: Response) => {
  try {
    const userId = parseInt(req.params.userId, 10);

    const totalPrice = await UserServices.calculateTotalPrice(userId);

    res.status(200).json({
      success: true,
      message: 'Total price calculated successfully!',
      data: {
        totalPrice,
      },
    });
  } catch (error: any) {
    res.status(404).json({
      success: false,
      message: 'User not found',
      error: {
        code: 404,
        description: 'User not found!',
      },
    });
  }
};

export const UserController = {
  createUser,
  getAllUsers,
  getSingleUser,
  deleteUser,
  updateUser,
  addProductToOrder,
  getAllOrders,
  totalPriceOfProduct,
};
