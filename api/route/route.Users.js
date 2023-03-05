const express = require("express");
const router = express.Router();

const controller = require("../controller/UsersController");

router.get("/", controller.getAllUsers);

router.get("/:id", controller.getAUser);

router.post("/login", controller.postLogin);

router.post("/register", controller.postRegister);

router.delete("/delete/:id", controller.deleteAccount);

router.put("/changePassword/:id", controller.changePassword);

module.exports = router;
