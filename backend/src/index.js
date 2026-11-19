import express from 'express';
import cors from 'cors';
import { Mongo } from './database/mongo.js';
import { config } from 'dotenv';
import authRouter from './auth/auth.js';

config();

async function main(params) {

    const hostName =  'localhost';
    const port = 3000;

    const app = express();

    const mongoConnections = await Mongo.connect({
        mongoConnectionsString: process.env.MONGO_CS, 
        mongoDdName:process.env.MONGO_DB_NAME 
    });
    console.log(mongoConnections);
    
    app.use(express.json());
    app.use(cors());

    app.get('/', (req, res) => {
        res.send({
            success: true,
            statusCode: 200,
            body: 'Welcome to MyGatronomy!'
        })
    });

    app.use('/auth', authRouter)

    app.listen(port, () => {
        console.log(`Server Running on: http://${hostName}:${port}`);
    });


}

main();