const express = require("express");
const {
  GetCollectionById,
  UpdateCollectionById,
  GetCategories,
  DeleteCollectionById,
  CreateCollection,
  GetCollections,
} = require("../controllers/collectionController");
const router = express.Router();

router.get("/:id", GetCollectionById);

router.get("/", GetCollections);

router.put("/:id", UpdateCollectionById);

router.post("/", CreateCollection);

router.delete("/:id", DeleteCollectionById);

module.exports = router;
