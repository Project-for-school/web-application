const users = require("../../models/UsersModel");
const bcrypt = require("bcrypt");

const Authcontroller = {
  getAllUsers: async (req, res) => {
    try {
      const allUsers = await users.find();
      res.json(allUsers);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  getAUser: async (req, res) => {
    try{
      const aUser = await users.findOne({_id: req.params.id})
      res.status(200).json(aUser)
    }catch(err){
      res.status(500).json(err)
    }
  },

  postLogin: async (req, res) => {
    try {
      const user = await users.findOne({ username: req.body.username });

      if (!user) {
        res.json("wrong username");
      }

      const Validpassword = await bcrypt.compare(
        req.body.password,
        user.password
      );

      if (!Validpassword) {
        res.json("wrong password");
      }
      if (user && Validpassword) {
        res.status(200).json(user);
      }
    } catch (err) {
      res.status(500).json(err);
    }
  },

  postRegister: async (req, res) => {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashed = await bcrypt.hash(req.body.password, salt);
      const newUser = await users.create({
        username: req.body.username,
        password: hashed,
        email: req.body.email,
      });
      res.status(200).json(newUser);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  deleteAccount: async (req, res) => {
    try {
      await users.findByIdAndDelete({ _id: req.params.id });
      res.status(200).json("Success");
    } catch (err) {
      res.status(500).json(err);
    }
  },

  changePassword: async (req, res) => {
    try {
      const salt = await bcrypt.genSalt(10);
      const newPassword = await req.body.newPassword
      const hashedNewPassword = await bcrypt.hash(newPassword, salt);
      await users.findByIdAndUpdate({_id: req.params.id}, {password: hashedNewPassword})
      res.status(200).json('Success')
    } catch (err) {
      res.status(500).json(err)
    }
  },
};

module.exports = Authcontroller;
