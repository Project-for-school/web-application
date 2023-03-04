const express = require("express");
const router = express.Router();

const controller = require("../controller/UsersController");

router.get("/users", controller.getAllUsers);

router.post("/users", controller.postUsers);

module.exports = router;
