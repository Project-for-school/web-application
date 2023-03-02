const express = require("express");
const router = express.Router();
const controller = require("../controller/ProductsController");

router.get("/products", controller.getApiProducts);
router.post("/products", controller.postProducts);

module.exports = router;
