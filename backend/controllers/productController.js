// backend/controllers/productController.js

import Product from '../models/Product.js';

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getProducts = async (req, res) => {
  try{
    const products = await Product.find({});
  res.json(products);
  } catch (error) {
     res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Get single product
// @route   GET /api/products/:id
// @access  Public
const getProductById = async (req, res) => {
  try{
    const product = await Product.findById(req.params.id);
    if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
}catch(error){
  res.status(500).json({ message: 'Server Error' });
}
};

const addProduct = async (req, res) => {
  try {
    console.log('✅ Incoming product data:', req.body); // 👈 See what data is received

    const { name, description, price, image, brand, category, countInStock } = req.body;

    // Validate required fields
    if (!name || !description || !price || !image || !brand || !category || !countInStock) {
      console.log('❌ Validation failed');
      return res.status(400).json({ message: 'All fields are required' });
    }

    const product = new Product({
      name,
      description,
      price,
      image,
      brand,
      category,
      countInStock,
    });

    const savedProduct = await product.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    console.error('❌ Error in addProduct:', error.message); // 👈 Print the actual error
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};


export { getProducts, getProductById, addProduct };
