import express from 'express';
import cors from 'cors';

async function main(params) {

    const hostName =  'localhost';
    const port = 3000;

    const app = express();
    
    app.use(express.json());
    app.use(cors());

    app.get('/', (req, res) => {
        
    });


}

main();