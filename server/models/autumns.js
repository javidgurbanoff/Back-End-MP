const mongoose = require("mongoose");

const AutumnSchema = new mongoose.Schema({
  imageURL: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Autumns", CategorySchema);
