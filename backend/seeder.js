// backend/seeder.js

import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Product from './models/Product.js';
import products from './data/products.js';

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB Connected');
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

const importData = async () => {
  try {
    await connectDB();
    await Product.deleteMany();
    await Product.insertMany(products);
    console.log('✅ Data Imported!');
    process.exit();
  } catch (error) {
    console.error('❌ Failed to insert:',error);
    process.exit(1);
  }
};

importData();
