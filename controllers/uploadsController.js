const Product = require('../models/Product');

const { StatusCodes } = require('../errors');

exports.uploadProductImage = async (req, res) => {
  res.send('Upload product image');
};
