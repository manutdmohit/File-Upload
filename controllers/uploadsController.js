const path = require('path');

const Product = require('../models/Product');

const { StatusCodes } = require('http-status-codes');

exports.uploadProductImage = async (req, res) => {
  const productImage = req.files.image;

  const imagePath = path.join(
    __dirname,
    '../public/uploads/' + `${productImage.name}`
  );

  await productImage.mv(imagePath);

  return res
    .status(StatusCodes.OK)
    .json({ image: { src: `/uploads/${productImage.name}` } });
};
