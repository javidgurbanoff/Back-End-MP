const Category = require("../models/categories");

async function GetCategories(req, res, next) {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (err) {
    res.status(200).json(err);
  }
}

async function GetCategoryById(req, res) {
  try {
    const SingleCategory = await Category.findById(req.params.id);
    res.status(200).json(SingleCategory);
  } catch (err) {
    res.status(200).json(err);
  }
}

async function UpdateCategoryById(req, res, next) {
  try {
    const { id } = req.params;
    const updatedCategory = await Category.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedCategory);
  } catch (err) {
    next(err);
  }
}

async function DeleteCategoryById(req, res, next) {
  try {
    const { id } = req.params;
    await Category.findByIdAndDelete(id);
    res.status(200).json("Category has been deleted.");
  } catch (err) {
    next(err);
  }
}

async function CreateCategory(req, res, next) {
  const newCategory = new Category(req.body);
  console.log(newCategory);
  try {
    const savedCategory = await newCategory.save();
    res.status(200).json(savedCategory);
  } catch (err) {
    next(err);
  }
}

module.exports = {
  GetCategories,
  GetCategoryById,
  UpdateCategoryById,
  DeleteCategoryById,
  CreateCategory,
};
