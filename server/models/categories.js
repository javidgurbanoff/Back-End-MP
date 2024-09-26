const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
  imageURL: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Categories", CategorySchema);
