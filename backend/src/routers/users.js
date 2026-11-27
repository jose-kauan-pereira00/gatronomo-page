import express from 'express';
import UsersControllers from '../controllers/users.js';
import UsersControllers from '../controllers/users.js';

const usersRouter = express.Router();
const UsersControllers = new UsersControllers();

usersRouter.get('/', async (req, res) => {
    const { success, statusCode, body } = await UsersControllers.getUsers();

    res.status(statusCode).send({ success, statusCode, body });
});
