const Product = require("../models/products");

async function GetProducts(req, res, next) {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
}

async function GetProductById(req, res) {
  try {
    const singleProduct = await Product.findById(req.params.id);
    res.status(200).json(singleProduct);
  } catch (err) {
    res.status(500).json(err);
  }
}

async function UpdateProductById(req, res, next) {
  try {
    const { id } = req.params;
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedProduct);
  } catch (err) {
    next(err);
  }
}

async function DeleteProductById(req, res, next) {
  try {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    res.status(200).json("Product has been deleted.");
  } catch (err) {
    next(err);
  }
}

async function CreateProduct(req, res, next) {
  const newProduct = new Product(req.body);
  try {
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (err) {
    next(err);
  }
}

module.exports = {
  GetProducts,
  GetProductById,
  UpdateProductById,
  DeleteProductById,
  CreateProduct,
};
