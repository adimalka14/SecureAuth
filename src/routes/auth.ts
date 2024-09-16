import express from 'express';
import { login, logout, register } from '../controllers/authController';
import { loginLimiter, registerLimiter } from '../config/ratelimits';

const router = express.Router();

router.post('/login', loginLimiter, login);

router.get('/logout', logout);

router.post('/register', registerLimiter, register);

export default router;
