import { User } from "../types/user";

const db = require('../models');

export class UserService {
    constructor() {}

    getAllUsers = async () => {
        const users:User[] = await db.User.findAll();
        return users;
    };
}

