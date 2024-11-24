import { Request, Response } from 'express';
import { User } from '../types/user';

export const getAllUsers =(req: Request, res: Response) => {
    res.send('Get all users');
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