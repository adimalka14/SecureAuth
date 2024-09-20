import { Request, Response } from 'express';

export const adminDashboard = (req: Request, res: Response) => {
    res.status(200).json({ message: 'Admin Dashboard' });
};

export const manageUsers = (req: Request, res: Response) => {
    res.status(200).json({ message: 'Users managed successfully' });
};
