import express from 'express';
import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { router as userRoutes } from './routes/Users';
import { router as shopRoutes } from './routes/Shops';

createConnection()
    .then(async () => {
        // create and setup express app
        const app = express();

        app.use(express.json());
        app.use('/users', userRoutes);
        app.use('/shops', shopRoutes);

        // start express server
        app.listen(3000);
    })
    .catch((error) => console.log(error));
