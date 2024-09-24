import express from 'express';
import { changePasswordCtrl, deleteAccountCtrl, getUserDetailsCtrl, updateUserInfoCtrl } from '../controllers/user.controller';
import { ensureAuthenticatedMW } from '../middlewares/authentication.MW';

const router = express.Router();

router.post('/change-password', ensureAuthenticatedMW, changePasswordCtrl);

router.delete('/:userId', ensureAuthenticatedMW, deleteAccountCtrl);

router.get('/:userId', ensureAuthenticatedMW, getUserDetailsCtrl);

router.put('/:userId', ensureAuthenticatedMW, updateUserInfoCtrl);

export default router;
