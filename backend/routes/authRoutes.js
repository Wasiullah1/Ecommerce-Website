// backend/routes/adminRoutes.js
import express from 'express';
import { loginAdmin, logoutAdmin } from '../controllers/authController.js';
import { verifyAdmin } from '../middleware/authMiddleware.js';
// import { someProtectedController } from '../controllers/authController.js';

const router = express.Router();

router.post('/login', loginAdmin);
router.post('/logout', logoutAdmin);
// router.get('/protected', verifyAdmin, someProtectedController);
router.get('/verify', verifyAdmin, (req, res) => {
  res.status(200).json({ isAdmin: true });
});
export default router;

