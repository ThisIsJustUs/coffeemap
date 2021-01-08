import express, { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { getRepository } from 'typeorm';
import { User } from '../entity/User';
import passportLocal from 'passport-local';
import passport from 'passport';

const router = express.Router();
const LocalStrategy = passportLocal.Strategy;

const PassportConfiguration = () => {
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
    passport.deserializeUser((id: number, done) => {
        const userRepository = getRepository(User);
        const user = userRepository.findOne(id);
        return done(null, user);
    });
};

//  Register User
router.post('/register', async (req: Request, res: Response) => {
    // Extract Values from Req Body
    const { firstName, lastName, role, email, password } = req.body;

    // Hash Password
    const hash = await bcrypt.hash(password, 12);

    try {
        // Create new user account
        const userRepository = getRepository(User);
        const user = userRepository.create({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: hash,
            role: role,
        });

        // Save new user
        const result = await userRepository.save(user);

        if (result) {
            res.send({ email: req.body.email, message: 'User Created' });
        }
    } catch (error) {
        res.status(500).send({ message: error.message, detail: error.detail });
        console.log(error);
    }
});

// Login User
router.post(
    '/login',
    passport.authenticate('local'),
    (req: Request, res: Response) => {
        res.send(req.user);
    }
);

router.get('/logout', (req: Request, res: Response) => {
    req.logout();
    res.send('User logged out');
});

router.get('/unauthorized', (_req: Request, res: Response) => {
    res.status(401).send('Sorry, unauthorised');
});

export { router, PassportConfiguration };
