import 'dotenv-safe/config';
import express from 'express';
import cors from 'cors';
import { createConnection, getRepository } from 'typeorm';
import { COOKIE_NAME, __prod__ } from './constants';
import session from 'express-session';
import passport from 'passport';
import path from 'path';
import cookieParser from 'cookie-parser';
import bcrypt from 'bcrypt';
import Redis from 'ioredis';
import connectRedis from 'connect-redis';
import 'reflect-metadata';
import passportLocal from 'passport-local';
import { User } from './entities/User';
import { Shop } from './entities/Shop';
import { router as authRoutes } from './routes/Auth';
import { router as userRoutes } from './routes/User';
import { router as shopRoutes } from './routes/Shops';

const main = async () => {
    const conn = await createConnection({
        type: 'postgres',
        url: process.env.DATABASE_URL,
        logging: true,
        synchronize: true,
        migrations: [path.join(__dirname, './migrations/*')],
        entities: [User, Shop],
    });

    await conn.runMigrations();

    // create and setup express app
    const app = express();
    const RedisStore = connectRedis(session);
    const redis = new Redis(process.env.REDIS_URL);

    app.set('trust proxy', 1);

    app.use(
        cors({
            origin: process.env.CORS_ORIGIN,
            credentials: true,
        })
    );
    app.use(express.json());
    app.use(cookieParser());
    app.use(
        session({
            name: COOKIE_NAME,
            store: new RedisStore({
                client: redis,
                disableTouch: true,
            }),
            secret: process.env.SESSION_SECRET,
            resave: false,
            saveUninitialized: false,
            cookie: {
                maxAge: 1000 * 60 * 60 * 24 * 365 * 10, // 10 years
                httpOnly: true,
                sameSite: 'lax', // csrf
                secure: __prod__, // cookie only works in https
            },
        })
    );

    const LocalStrategy = passportLocal.Strategy;

    // Configure the local strategy for use by Passport.
    //
    // The local strategy require a `verify` function which receives the credentials
    // (`username` and `password`) submitted by the user.  The function must verify
    // that the password is correct and then invoke `cb` with a user object, which
    // will be set at `req.user` in route handlers after authentication.
    passport.use(
        new LocalStrategy(
            {
                usernameField: 'email',
                passwordField: 'password',
            },
            async (email, password, done) => {
                // Find user by email
                const authRepository = getRepository(User);
                const user: any = await authRepository.findOne({
                    email: email,
                });

                // Check if sent password matches database
                bcrypt.compare(password, user.password, (err, isMatch) => {
                    if (err) {
                        console.log(err);
                    }
                    if (isMatch) {
                        return done(null, user);
                    } else {
                        //password is incorrect
                        return done(null, false, {
                            message: 'Password is incorrect',
                        });
                    }
                });
            }
        )
    );

    // Stores user details inside session. serializeUser determines which data of the user
    // object should be stored in the session. The result of the serializeUser method is attached
    // to the session as req.session.passport.user = {}. Here for instance, it would be (as we provide
    // the user id as the key) req.session.passport.user = {id: 'xyz'}
    passport.serializeUser((user: any, done) => done(null, user.id));

    // In deserializeUser that key is matched with the in memory array / database or any data resource.
    // The fetched object is attached to the request object as req.user
    passport.deserializeUser(async (id: number, done) => {
        const userRepository = getRepository(User);
        const user = await userRepository.findOne(id);
        return done(null, user);
    });

    // Passport
    app.use(passport.initialize());
    app.use(passport.session());

    app.use('/auth', authRoutes);
    app.use('/user', userRoutes);
    app.use('/shops', shopRoutes);

    // start express server
    app.listen(parseInt(process.env.PORT), () => {
        console.log('server started on localhost:4000');
    });
};

main().catch((err) => {
    console.error(err);
});
