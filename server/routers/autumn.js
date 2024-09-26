const express = require("express");
const {
  GetAutumnById,
  UpdateAutumnById,
  GetAutumns,
  DeleteAutumnById,
  CreateAutumn,
} = require("../controllers/autumnController");
const router = express.Router();

router.get("/:id", GetAutumnById);

router.get("/", GetCategories);

router.put("/:id", UpdateAutumnById);

router.post("/", CreateAutumn);

router.delete("/:id", DeleteAutumnById);

module.exports = router;
