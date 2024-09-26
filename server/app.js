const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { connectMongoDb } = require("./connection");
const app = express();
const PORT = process.env.PORT || 5000;

// import routes
const categoryRoutes = require("./routers/category");
const collectionRoutes = require("./routers/collection");
const productRoutes = require("./routers/product");
// const authRouters = require("./routers/authRouters");
app.use(express.json());
app.use(express.json({ extended: true }));

// connectDB();

const corsOpts = {
  origin: "*",

  allowedHeaders: ["Content-Type"],
};

app.use(cors(corsOpts));

// app.use("/api/v1/blogs", blogRouter);
// app.use("/api/v1/auth", authRouters);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/collection", collectionRoutes);
app.use("/api/v1/product", productRoutes);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

const url = process.env.CONNECTION_URL.replace(
  "<db_password>",
  process.env.PASSWORD
);
connectMongoDb(url);
