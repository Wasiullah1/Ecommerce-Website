// backend/controllers/productController.js

import Product from '../models/Product.js';

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getProducts = async (req, res) => {
  
  try{
    const category = req.query.category || '';

    let query = {};
    if (category) {
      query.category = category;
    }
    const products = await Product.find(query);
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
      console.log("This is from backend: " +product)
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
// DELETE PRODUCT
export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });

    await product.deleteOne();
    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete product' });
  }
};

// UPDATE PRODUCT
export const updateProduct = async (req, res) => {
  try {
    const { name, description, price, brand, category, countInStock, image } = req.body;
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });

    product.name = name || product.name;
    product.description = description || product.description;
    product.price = price || product.price;
    product.brand = brand || product.brand;
    product.category = category || product.category;
    product.countInStock = countInStock || product.countInStock;
    product.image = image || product.image;
    
    const updated = await product.save();
    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update product' });
  }
};



export { getProducts, getProductById, addProduct};
