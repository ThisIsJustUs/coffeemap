import express, { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { getRepository } from 'typeorm';
import { User } from '../entity/User';
import passport from 'passport';

const router = express.Router();

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
        try {
            res.send(req.user);
        } catch (error) {
            res.send(error);
        }
    }
);

router.get('/logout', (req: Request, res: Response) => {
    req.logout();
    res.send({ message: 'User is logged out' });
});

router.get('/unauthorized', (_req: Request, res: Response) => {
    res.status(401).send('Sorry, unauthorised');
});

router.get('/me', (req: Request, res: Response) => {
    const currentUser = req.user;
    if (!currentUser) {
        res.send(null);
    } else {
        res.send(currentUser);
    }
});

export { router };
