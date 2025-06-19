import express from 'express';
import { getAdminStats, getDashboardData} from '../controllers/adminStatsController.js';


const router = express.Router();

router.get('/stats', getAdminStats);
router.get('/dashboard', getDashboardData); // GET /api/admin/dashboard


export default router;