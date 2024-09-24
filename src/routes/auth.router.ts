import express from 'express';
import { loginCtrl, logoutCtrl, registerCtrl } from '../controllers/auth.controller';
import { loginLimiterMW, registerLimiterMW } from '../middlewares/rateLimits.MW';

const router = express.Router();

router.post('/login', loginLimiterMW, loginCtrl);

router.get('/logout', logoutCtrl);

router.post('/register', registerLimiterMW, registerCtrl);

export default router;
