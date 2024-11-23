import { Request, Response } from 'express';

export const getAllUsers =(req: Request, res: Response) => {
    res.send('Get all users');
}; 

export const getUserById = (req: Request, res: Response) => {
    res.send('Get user by ID');
};

export const createUser = (req: Request, res: Response) => {
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