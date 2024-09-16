import { Request, Response, NextFunction } from 'express';
import { comparePasswords, hashPassword } from '../utils/helpers';
import { findUserByUsername, deleteUser } from '../models/users';
import { User } from '../models/users';

export const changePassword = async (req: Request, res: Response, next: NextFunction) => {
    const { prevPassword, newPassword } = req.body;

    const user: User = await findUserByUsername(req.user.username);

    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    if (!user.password) {
        return res.status(500).json({ message: 'User does not have a password set' });
    }

    if (!(await comparePasswords(prevPassword, user.password))) {
        return res.status(401).json({ message: 'Invalid current password' });
    }

    if (await comparePasswords(newPassword, user.password)) {
        return res.status(400).json({ message: 'You need to choose a different password' });
    }

    user.password = await hashPassword(newPassword);

    res.status(200).json({ message: 'User password changed successfully.' });
};

export const getUserDetails = (req: Request, res: Response, next: NextFunction) => {
    res.json({
        name: req.user.username,
        role: req.user.role,
        password: req.user.password,
    });
};

export const deleteAccount = async (req: Request, res: Response, next: NextFunction) => {
    const user: User = await findUserByUsername(req.user.username);

    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    try {
        deleteUser(user.username);
        req.logout((err) => {
            if (err) return next(err);
        });
        return res.status(200).json({ message: 'Account deleted successfully.' });
    } catch (err) {
        return res.status(500).json({ message: 'Failed to delete account.' });
    }
};

export const updateUserInfo = async (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({ message: 'User updated successfully.' });
};
