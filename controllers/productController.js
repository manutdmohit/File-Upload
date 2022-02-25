const Product = require('../models/Product');
const { StatusCodes } = require('http-status-codes');

exports.createProduct = async (req, res) => {
  res.send('Create Product');
};

exports.getAllProducts = async (req, res) => {
  res.send('List of Products');
};
