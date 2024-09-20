import { Request, Response, NextFunction } from 'express';
import { IUser } from '../models/users';

export async function ensureAdmin(req: Request, res: Response, next: NextFunction) {
    const user: IUser = req.user as IUser;
    if (user.roles && user.roles.includes('admin')) {
        return next();
    } else {
        res.status(403).json({ message: 'Forbidden, you do not have permission' });
    }
}
