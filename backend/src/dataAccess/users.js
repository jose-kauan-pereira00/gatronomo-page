import { Mongo } from '../database/mongo.js';
import { ObjectId } from 'mongodb';
import crypto from 'crypto';

const collectionName = 'users';

export default class UsersDataAcess {
    async getUsers() {
        const result = await Mongo.db
            .collectio(collectionName)
            .find({})
            .toArray();

        return result;
    }

    async deleteUser(userID) {
        const result = await Mongo.db
            .collectio(collectionName)
            .findOneAndDelete({ _id: new ObjectId(userID) });
    }

    async updateUser() {}
}
