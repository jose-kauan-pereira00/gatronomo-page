import UserDataAccess from '../dataAccess/users.js';
import { ok, serverError } from '../helpers/httpResponse.js';

export default class UsersControllers {
    constructor() {
        this.dataAccess = new UserDataAccess();
    }

    async getUsers() {
        try {
            const users = this.dataAccess.getUsers();
            return ok(users);
        } catch (err) {
            return serverError(err);
        }
    }
}
