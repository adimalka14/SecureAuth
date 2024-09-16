import express from 'express';
import { changePassword, deleteAccount, getUserDetails, updateUserInfo } from '../controllers/userController';
import { ensureAuthenticated } from '../middlewares/authentication';

const router = express.Router();

router.post('/change-password', ensureAuthenticated, changePassword);

router.delete('/delete-account', ensureAuthenticated, deleteAccount);

router.get('/user-details', ensureAuthenticated, getUserDetails);

router.put('/update-details', ensureAuthenticated, updateUserInfo);

export default router;
