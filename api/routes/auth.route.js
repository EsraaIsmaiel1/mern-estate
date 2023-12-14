import express from 'express';
import {
  googleAuth,
  signIn,
  signOut,
  signup,
} from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/signUp', signup);
router.post('/signIn', signIn);
router.post('/google', googleAuth);
router.get('/signOut', signOut);

export default router;
