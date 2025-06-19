// backend/routes/productRoutes.js

import express from 'express';
const router = express.Router();
// import { addProduct } from '../controllers/productController';
import {
  getProducts,
  getProductById,
  addProduct,
  deleteProduct,
  updateProduct,
} from '../controllers/productController.js';

router.route('/').get(getProducts);
router.route('/:id').get(getProductById);
router.post('/', addProduct);
router.delete('/:id', deleteProduct);
router.put('/:id', updateProduct);


export default router;
