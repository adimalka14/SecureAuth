import { Express } from 'express';
import { default as authRouter } from './auth.router';
import { default as userRouter } from './user.router';
import { default as mainRouter } from './main.router';

export const initAppRoutes = (app: Express) => {
    app.use(mainRouter);
    app.use('/auth', authRouter);
    app.use('/user', userRouter);
};
