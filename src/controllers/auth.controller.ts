import { Request, Response, NextFunction } from 'express';
import { hashPassword } from '../utils/helpers';
import { findUserByUsername, createUser, IUser } from '../models/user.model';
import passport from 'passport';

export const loginCtrl = (req: Request, res: Response, next: NextFunction) => {
    passport.authenticate('local', (err: any, user: any, info: any) => {
        if (err) return next(err);
        if (!user) return res.status(401).json({ message: info.message });

        req.logIn(user, (err) => {
            if (err) return next(err);
            return res.json({ message: 'Logged in successfully', user });
        });
    })(req, res, next);
};

export const logoutCtrl = (req: Request, res: Response, next: NextFunction) => {
    req.logout((err) => {
        if (err) return next(err);
        res.json({ message: 'Logged out successfully' });
    });
};

export const registerCtrl = async (req: Request, res: Response, next: NextFunction) => {
    const { username, password } = req.body;

    const userExist: IUser | undefined = await findUserByUsername(username);

    if (userExist) {
        return res.status(409).json({ message: 'User already exists' });
    }

    const hashedPassword = await hashPassword(password);
    const newUser = await createUser(username, hashedPassword);
    req.logIn(newUser, (err) => {
        if (err) {
            return next(err);
        }
        return res.status(201).json({ message: 'User registered successfully' });
    });
};
