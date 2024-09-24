import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import session from 'express-session';
import compression from 'compression';
import dotenv from 'dotenv';

import passport from './config/passport.config';
import { generalLimiterMW } from './middlewares/rateLimits.MW';
import { initAppRoutes } from './routes';

dotenv.config();

const app = express();

const sessionOptions = {
    secret: process.env.SESSION_SECRET || 'default_secret',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
};

app.use(generalLimiterMW);
app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session(sessionOptions));
app.use(passport.initialize());
app.use(passport.session());

initAppRoutes(app);

export default app;
