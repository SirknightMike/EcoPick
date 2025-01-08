import { Request, Response } from 'express';
import { User } from '../types/user';
import { UserService } from '../services/users-service';

export const getAllUsers =(req: Request, res: Response) => {
    const userService = new UserService();
    const users = userService.getAllUsers();
    res.send(users);
}; 

export const getUserById = (req: Request, res: Response) => {
    res.send('Get user by ID');
};

export const createUser = (req: Request, res: Response) => {
    const userCredentials = req.body as User;
    res.send('Create user');
}

export const updateUser = (req: Request, res: Response) => {
    res.send('Update user');
};

export const deleteUser = (req: Request, res: Response) => {
    const userId = req.params.id;
    res.send(`Delete user with ID: ${userId}`);
}

module.exports = { getAllUsers , getUserById, createUser, updateUser, deleteUser };