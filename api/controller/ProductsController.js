const ProductsModel = require("../../models/ProductsModel");

module.exports.getApiProducts = async (req, res) => {
  try {
    const Products = await ProductsModel.find();
    res.status(200).json(Products);
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
    res.status(200).json("Success");
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports.deleteProducts = async (req, res) => {
  try {
    await ProductsModel.findByIdAndDelete({ _id: req.params.id });
    res.status(200).json("Success");
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports.patchProducts = async (req, res) => {
  const ObjectUser = {
    title: req.body.title,
    difficult: req.body.difficult,
    description: req.body.description,
    author: req.body.author,
  };

  try {
    await ProductsModel.findOneAndUpdate({ _id: req.params.id }, ObjectUser);
    res.status(200).json("Success");
  } catch (err) {
    res.status(500).json(err);
  }
};