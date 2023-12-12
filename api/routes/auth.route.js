import express from 'express';
import { logIn, signup } from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/signUp', signup);
router.post('/signIn', logIn);

export default router;
