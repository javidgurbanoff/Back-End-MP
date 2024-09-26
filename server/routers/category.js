const express = require("express");
const {
  GetCategoryById,
  UpdateCategoryById,
  GetCategories,
  DeleteCategoryById,
  CreateCategory,
} = require("../controllers/categoryController");
const router = express.Router();

router.get("/:id", GetCategoryById);

router.get("/", GetCategories);

router.put("/:id", UpdateCategoryById);

router.post("/", CreateCategory);

router.delete("/:id", DeleteCategoryById);

module.exports = router;
