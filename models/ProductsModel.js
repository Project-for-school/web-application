const mongoose = require("mongoose");

const ProductsSchema = new mongoose.Schema({
  title: { type: String, require: true },
  difficult: { type: String, require: true },
  description: { type: String, require: true },
  like: { type: Number, default: 0 },
  dislike: { type: Number, default: 0 },
  author: { type: String, default: "Anonymous" },
});

const ProductsModel = mongoose.model("Products", ProductsSchema);

module.exports = ProductsModel;
