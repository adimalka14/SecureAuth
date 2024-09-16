import { Request, Response, NextFunction } from 'express';
import { User } from '../models/users';

export async function ensureAdmin(req: Request, res: Response, next: NextFunction) {
    const user: User = req.user as User;
    if (user.roles && user.roles.includes('admin')) {
        return next();
    } else {
        res.status(403).json({ message: 'Forbidden, you do not have permission' });
    }
}
