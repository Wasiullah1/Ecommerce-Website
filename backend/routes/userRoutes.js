import express from 'express';
// import { protect } from '../middleware/authMiddleware.js';
import { registerUser, loginUser } from '../controllers/userController.js';
import { getAllUsers } from '../controllers/userController.js';
import { verifyAdmin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/', verifyAdmin, getAllUsers); 
// router.get('/profile', protect, getUserProfile);
// router.post('/logout', logoutUser);

export default router;
