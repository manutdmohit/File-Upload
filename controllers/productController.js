const Product = require('../models/Product');
const { StatusCodes } = require('http-status-codes');

exports.createProduct = async (req, res) => {
  const product = await Product.create(req.body);

  res.status(StatusCodes.CREATED).json({ product });
};

exports.getAllProducts = async (req, res) => {
  res.send('List of Products');
};
