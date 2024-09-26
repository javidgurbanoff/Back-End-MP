const mongoose = require("mongoose");

const connectMongoDb = async (url) => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(url);
    console.log("Mongo connected");
  } catch (error) {
    console.log(error);
    process.exit();
  }
};
module.exports = {
  connectMongoDb,
};
