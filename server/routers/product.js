const express = require("express");
const {
  GetProductById,
  UpdateProductById,
  GetProducts,
  DeleteProductById,
  CreateProduct,
} = require("../controllers/productController");
const router = express.Router();

router.get("/:id", GetProductById);

router.get("/", GetProducts);

router.put("/:id", UpdateProductById);

router.post("/", CreateProduct);

router.delete("/:id", DeleteProductById);

module.exports = router;
