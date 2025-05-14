// backend/server.js

import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';


const allowedOrigins = ['http://localhost:3000'];

dotenv.config();
connectDB(); // Connect to MongoDB

const app = express();

// Middleware
// app.use(cors());
app.use(cors({
  origin: allowedOrigins,
  credentials: true
}));
app.use(express.json());
app.use(cookieParser()); // Parse JSON bodies

// Routes
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

// Error Handlers
app.use(notFound);
app.use(errorHandler);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 Server running at http://localhost:${PORT}`)
);

