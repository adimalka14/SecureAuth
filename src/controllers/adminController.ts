import { Request, Response, NextFunction } from 'express';

export const adminDashboard = (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({ message: 'Admin Dashboard' });
};

export const manageUsers = (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({ message: 'Users managed successfully' });
};
