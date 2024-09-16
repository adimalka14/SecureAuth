import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import { generalLimiter } from './config/ratelimits';
import compression from 'compression';
import passport from './config/passport';
import session from 'express-session';
import dotenv from 'dotenv';

dotenv.config();

import authRouter from './routes/auth';
import userRouter from './routes/user';
import adminRouter from './routes/admin';

const app = express();

const sessionOptions = {
    secret: process.env.SESSION_SECRET || 'default_secret',
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: false,
    },
};

app.use(generalLimiter);
app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session(sessionOptions));
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req: express.Request, res: express.Response) => {
    res.status(200).send('OK');
});
app.use('/auth', authRouter);
app.use('/user', userRouter);
app.use('/admin', adminRouter);

export default app;
