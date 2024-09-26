import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import session from 'express-session';
import compression from 'compression';
import { SESSION_SECRET } from './utils/env-var';
import passport from './config/passport.config';
import { generalLimiterMW } from './middlewares/rateLimits.MW';
import { initAppRoutes } from './routes';

const app = express();

const sessionOptions = {
    secret: SESSION_SECRET,
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
