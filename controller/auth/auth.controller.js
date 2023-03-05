const user = require("../../models/UsersModel");
const bcrypt = require("bcrypt");

const Authcontroller = {
  getLogin: (req, res) => {
    res.render("../views/auth/login");
  },

  postLogin: async (req, res) => {
    try {
        let errors = []
      const user = await user.findOne({ username: req.body.username });
      if (!user) {
        res.status(404).json("Wrong username");
      }
      const Validpassword = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (!Validpassword) {
        res.status(404).json("Wrong password");
      }
      if (user && Validpassword) {
        res.status(200).json(user);
      }
    } catch (err) {
      res.status(500).json(err);
    }
  },

  getRegister: (req, res) => {
    res.render("../views/auth/signup");
  },

  postRegister: async (req, res) => {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashed = await bcrypt.hash(req.body.password, salt);
      const newUser = await user.create({
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
