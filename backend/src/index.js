import express from 'express';
import cors from 'cors';

async function main(params) {

    const hostName =  'localhost';
    const port = 3000;

    const app = express();
    
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