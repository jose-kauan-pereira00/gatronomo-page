import { Mongo } from '../database/mongo.js';
import { ObjectId } from 'mongodb';
import crypto from 'crypto';

const collectionName = 'users';

export default class UsersDataAcess {
    async getUsers() {
        const result = await Mongo.db
            .collection(collectionName)
            .find()
            .toArray();

        return result;
    }

    async deleteUser(userID) {
        const result = await Mongo.db
            .collection(collectionName)
            .findOneAndDelete({ _id: new ObjectId(userID) });

        return result;
    }

    async updateUser(userID, userData) {
        const result = await Mongo.db
            .collection(collectionName)
            .findOneAndUpdate(
                { _id: new ObjectId(userID) },
                { $set: userData },
            );

        return result;
    }
}
