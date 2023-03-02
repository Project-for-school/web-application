const ProductsModel = require("../../models/ProductsModel");

module.exports.getApiProducts = async (req, res) => {
  try {
    const Products = await ProductsModel.find();
    res.json(Products);
  } catch (err) {
    res.status(500).json(`err ${err}`);
  }
};

module.exports.postProducts = async (req, res) => {
  try {
    await ProductsModel.create({
      title: req.body.title,
      description: req.body.description,
    });
    res.json("thanh cong");
  } catch (err) {
    res.status(500).json(err);
  }
};
