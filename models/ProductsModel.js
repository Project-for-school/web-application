const mongoose = require("mongoose");

const ProductsSchema = new mongoose.Schema({
  title: { type: String, require: true },
  count: { type: Number, require: true, default: 0 },
  difficult: { type: String, require: true },
  description: { type: String, require: true },
  like: { type: Number, require: true, default: 0 },
  dislike: { type: Number, require: true, default: 0 },
  author: { type: String, require: true, default: "Anonymous" },
});

const ProductsModel = mongoose.model("Products", ProductsSchema);

module.exports = ProductsModel;
