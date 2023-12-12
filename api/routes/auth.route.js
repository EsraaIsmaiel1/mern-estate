import express from 'express';
import { googleAuth, logIn, signup } from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/signUp', signup);
router.post('/signIn', logIn);
router.post('/google', googleAuth);

export default router;
