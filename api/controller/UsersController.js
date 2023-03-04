const UsersModel = require("../../models/UsersModel");

module.exports.getAllUsers = async (req, res) => {
  try {
    const allUsers = await UsersModel.find();
    res.json(allUsers);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports.postUsers = async (req, res) => {
  try {
    await UsersModel.create({});
    res.json("Success");
  } catch (err) {
    res.json(err);
  }
};
