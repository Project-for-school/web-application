const express = require("express");
const router = express.Router();

const Authcontroller = require("../../controller/auth/auth.controller");

//login
router.get("/login", Authcontroller.getLogin);

router.post("/login", Authcontroller.postLogin);

//register
router.get("/register", Authcontroller.getRegister);

router.post("/register", Authcontroller.postRegister);

module.exports = router;
