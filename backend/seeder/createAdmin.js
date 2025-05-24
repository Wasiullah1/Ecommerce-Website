import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from '../models/User.js';
import connectDB from '../config/db.js';

dotenv.config();
await connectDB();

const createAdmin = async () => {
  try {
    const exists = await User.findOne({ username: 'admin' });

    if (exists) {
      console.log('✅ Admin already exists');
    } else {
      const admin = new User({
        username: 'admin',
        password: 'Ecommerce123.',
        role: 'admin',
      });
      await admin.save();
      console.log('✅ Admin user created');
    }

    process.exit();
  } catch (error) {
    console.error('❌ Error creating admin:', error);
    process.exit(1);
  }
};

createAdmin();
