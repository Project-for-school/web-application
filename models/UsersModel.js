const mongoose = require("mongoose");
const express = require("express");

const UsersSchema = new mongoose.Schema({
  username: { type: String, require: true },
  password: { type: String, require: true },
  email: { type: String, require: true },
});

const UsersModel = mongoose.model("Users", UsersSchema);

module.exports = UsersModel;
