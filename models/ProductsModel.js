const mongoose = require("mongoose");

const ProductsSchema = new mongoose.Schema({
  title: { type: String, require: true },
  count: Number,
  difficult: { type: String, require: true },
  description: { type: String, require: true },
  like: Number,
  dislike: Number,
  author: { type: String, require: true, default: "Anonymous" },
});

const ProductsModel = mongoose.model("Products", ProductsSchema);

module.exports = ProductsModel;
