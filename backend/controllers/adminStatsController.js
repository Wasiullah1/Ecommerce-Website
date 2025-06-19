import Product from '../models/Product.js';
import User from '../models/userModel.js';
import Order from '../models/orderModel.js'; // If you’ve created an order model

export const getAdminStats = async (req, res) => {
  try {
    const totalProducts = await Product.countDocuments();
    const totalUsers = await User.countDocuments();
    const totalOrders = await Order.countDocuments(); // You must have Order model created

    res.json({ totalProducts, totalUsers, totalOrders });
  } catch (error) {
    console.error('Error fetching admin stats:', error);
    res.status(500).json({ message: 'Failed to load admin statistics' });
  }
};

export const getDashboardData = async (req, res) => {
  try {
    const recentOrders = await Order.find().sort({ createdAt: -1 }).limit(5);
    
    const topProducts = await Product.find().sort({ rating: -1 }).limit(5); // assuming you have a `rating` field

    res.json({ recentOrders, topProducts });
  } catch (err) {
    console.error('Error fetching dashboard data:', err);
    res.status(500).json({ message: 'Failed to load dashboard data' });
  }
};