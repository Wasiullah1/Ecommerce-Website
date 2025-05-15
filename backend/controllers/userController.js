import User from '../models/userModel.js';
import generateToken from '../utils/generateToken.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  // check if user exists
  const userExists = await User.findOne({ email });
  if (userExists) {
    return res.status(400).json({ message: 'User already exists' });
  }

  const user = await User.create({ name, email, password });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400).json({ message: 'Invalid user data' });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    console.log('Login request received:', { email, password });

    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      console.log('User not found');
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Check if the password matches
    const isPasswordMatch = await user.matchPassword(password);
    if (!isPasswordMatch) {
      console.log('Password does not match');
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: '7d',});

     res.cookie('token', token, {
    httpOnly: true,
    secure: false, // Set to true in production (with HTTPS)
    sameSite: 'lax',
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  });
    // Respond with user data and token
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ message: 'Server error' });
  }

  
};  
export const logoutUser = (req, res) => {
  res.cookie('jwt', '', {
    httpOnly: true,
    expires: new Date(0),
    secure: true,
    sameSite: 'lax',
  });
  res.status(200).json({ message: 'Logged out successfully' });
};