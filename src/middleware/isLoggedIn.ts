import { NextFunction, Request, Response } from 'express';

// DOCUMENTATION
// A middleware which checks whether a user is authenticated.
// The function uses the serialise/deserialise function provided by Passport
export default (req: Request, res: Response, next: NextFunction) => {
    console.log(req.isAuthenticated());
    if (!req.isAuthenticated()) {
        return res.redirect('/auth/unauthorized');
    }
    next();
};
