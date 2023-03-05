const UsersModel = require("../../models/UsersModel");
const bcrypt = require("bcrypt");

const Authcontroller = {
  getLogin: (req, res) => {
    res.render("../views/auth/login");
  },

  postLogin: async (req, res) => {
    try {
      const user = await UsersModel.findOne({ username: req.body.username });

      if (!user) {
        res.render("../views/auth/login", {
          errors: "Wrong username",
          values: req.body
        });
        return;
      }

      const Validpassword = await bcrypt.compare(req.body.password, user.password);
      
      if (!Validpassword) {
        res.render("../views/auth/login", {
          errors: "Wrong password",
          values: req.body
        });
        return;
      }
      
      res.render("../views/auth/login");
    } catch (err) {
      res.status(500).json("loi");
    }
  },

  getRegister: (req, res) => {
    res.render("../views/auth/signup");
  },

  postRegister: async (req, res) => {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashed = await bcrypt.hash(req.body.password, salt);
      const newUser = await UsersModel.create({
        username: req.body.username,
        password: hashed,
        email: req.body.email,
      });
      res.status(200).json(newUser);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = Authcontroller;
