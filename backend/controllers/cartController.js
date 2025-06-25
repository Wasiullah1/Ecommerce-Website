const Cart = require('../models/Cart');

exports.getCart = async (req, res) => {
  const cart = await Cart.findOne({ userId: req.user._id });
  res.json(cart ? cart.items : []);
};

exports.addToCart = async (req, res) => {
  const { product } = req.body;
  let cart = await Cart.findOne({ userId: req.user._id });
  if (!cart) {
    cart = new Cart({ userId: req.user._id, items: [] });
  }

  const existingItem = cart.items.find((item) => item.productId === product._id);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.items.push({ productId: product._id, name: product.name, price: product.price, quantity: 1, image: product.image });
  }

  await cart.save();
  res.json(cart.items);
};

exports.removeFromCart = async (req, res) => {
  const cart = await Cart.findOne({ userId: req.user._id });
  cart.items = cart.items.filter(item => item.productId !== req.params.productId);
  await cart.save();
  res.json(cart.items);
};

exports.clearCart = async (req, res) => {
  const cart = await Cart.findOne({ userId: req.user._id });
  cart.items = [];
  await cart.save();
  res.json(cart.items);
};