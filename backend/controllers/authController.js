// backend/controllers/adminController.js
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const loginAdmin = (req, res) => {
  const { username, password } = req.body;

  if (
    username === process.env.ADMIN_USERNAME &&
    password === process.env.ADMIN_PASSWORD
  ) {
    const token = jwt.sign({ isAdmin: true }, process.env.JWT_SECRET, {
      expiresIn: '1d',
    });

    res.cookie('admin_token', token, {
      httpOnly: true,
      secure: false, // Set to true in production (HTTPS)
      sameSite: 'Lax',
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    });

    res.json({ message: 'Login successful' });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
};

const logoutAdmin = (req, res) => {
  res.clearCookie('admin_token');
  res.json({ message: 'Logged out successfully' });
};

export { loginAdmin, logoutAdmin };
