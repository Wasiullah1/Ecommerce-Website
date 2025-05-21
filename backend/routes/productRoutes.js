// backend/routes/productRoutes.js

import express from 'express';
const router = express.Router();
// import { addProduct } from '../controllers/productController';
import {
  getProducts,
  getProductById,
  addProduct,
} from '../controllers/productController.js';

router.route('/').get(getProducts);
router.route('/:id').get(getProductById);
router.post('/', addProduct);


export default router;
