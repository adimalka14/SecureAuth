import express from 'express';
import { adminDashboard, manageUsers } from '../controllers/adminController';
import { ensureAuthenticated } from '../middlewares/authentication';
import { ensureAdmin } from '../middlewares/authorization';

const router = express.Router();

router.get('/manage-users', ensureAuthenticated, ensureAdmin, manageUsers);

router.get('/dashboard', ensureAuthenticated, ensureAdmin, adminDashboard);

export default router;
