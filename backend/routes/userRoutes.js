import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
import { getUserProfile, registerUser, loginUser } from '../controllers/userController.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', protect, getUserProfile);
router.post('/logout', logoutUser);

export default router;
