const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      minlength: 7,
      unique: true,
    },
    password: {
      type: String,
      require: true,
      minlength: 7,
    },
    email: {
      type: String,
      require: true,
      minlength: 10,
      unique: true,
    },
    admin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const UsersModel = mongoose.model("users", UsersSchema);

module.exports = UsersModel;
