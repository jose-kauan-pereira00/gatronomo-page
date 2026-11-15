import express from 'express';
import cors from 'cors';
import { Mongo } from './database/mongo';

async function main(params) {

    const hostName =  'localhost';
    const port = 3000;

    const app = express();

    const mongoConnections = await Mongo.connect({mongoConnectionsString: process.env.MONGO_CS, );
    
    app.use(express.json());
    app.use(cors());

    app.get('/', (req, res) => {
        res.send({
            success: true,
            statusCode: 200,
            body: 'Welcome to MyGatronomy!'
        })
    });

    app.listen(port, () => {
        console.log(`Server Running on: http://${hostName}:${port}`);
    });


}

main();