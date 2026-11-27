import UsersDataAccess from '../dataAccess/users.js';
import { ok, serverError } from '../helpers/httpResponse.js';

export default class UsersControllers {
    constructor() {
        this.dataAccess = new UsersDataAccess();
    }

    async getUsers() {
        try {
            const users = await this.dataAccess.getUsers();
            return ok(users);
        } catch (err) {
            return serverError(err);
        }
    }

    async deleteUser(useId) {
        try {
            const result = await this.dataAccess.deleteUser();
            return ok(result);
        } catch (err) {
            return serverError(err);
        }
    }
}
