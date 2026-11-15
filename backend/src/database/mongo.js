import { MongoClient } from 'mongodb';

export const Mongo = {
    async connect({mongoConnectionsString, mongoDdName}){
        try{
             const client = new MongoClient(mongoConnectionsString);

            await client.connect();

            const db = client.db(mongoDdName);

            this.client = client;
            this.db = db;

            return 'successfully connected';
            
        } catch (error){
            return { text: 'Error during mongo connections', error};
        }
       
    }
}