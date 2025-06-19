import express from 'express';
// import { protect } from '../middleware/authMiddleware.js';
import { registerUser, loginUser } from '../controllers/userController.js';
import { verifyAdmin } from '../middleware/authMiddleware.js';
import {
  getAllUsers,
  deleteUser,
  updateUser
} from '../controllers/userController.js';
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/', verifyAdmin);
router.get('/', getAllUsers); 
router.delete('/:id', deleteUser);
router.put('/:id', updateUser);

// router.get('/profile', protect, getUserProfile);
// router.post('/logout', logoutUser);

export default router;
