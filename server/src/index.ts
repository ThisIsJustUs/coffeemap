import express from 'express';
import { createConnection } from 'typeorm';
import session from 'express-session';
import passport from 'passport';
import cookieParser from 'cookie-parser';
import redis from 'redis';
import connectRedis from 'connect-redis';
import 'reflect-metadata';
import { PassportConfiguration } from './routes/Auth';
import { router as authRoutes } from './routes/Auth';
import { router as userRoutes } from './routes/Users';
import { router as shopRoutes } from './routes/Shops';

createConnection()
    .then(async () => {
        // create and setup express app
        const app = express();
        const RedisStore = connectRedis(session);
        const redisClient = redis.createClient();

        app.use(express.json());
        app.use(cookieParser());
        app.use(
            session({
                name: 'sid',
                store: new RedisStore({ client: redisClient }),
                secret: 'somesecret',
                resave: false,
                saveUninitialized: false,
                cookie: {
                    maxAge: 1000 * 60 * 60 * 24 * 365 * 10, // 10 years
                },
            })
        );

        PassportConfiguration();

        // Passport
        app.use(passport.initialize());
        app.use(passport.session());

        app.use('/auth', authRoutes);
        app.use('/users', userRoutes);
        app.use('/shops', shopRoutes);

        // start express server
        app.listen(4000);
    })
    .catch((error) => console.log(error));
