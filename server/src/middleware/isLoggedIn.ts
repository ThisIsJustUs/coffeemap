import { NextFunction, Request, RequestHandler, Response } from 'express';

// DOCUMENTATION
// A middleware which checks whether a user is authenticated.
// The function uses the serialise/deserialise function provided by Passport
export const isLoggedIn: RequestHandler = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (!req.isAuthenticated()) {
        console.log('User is logged in');
        return res.redirect('/auth/unauthorized');
    }
    next();
};
