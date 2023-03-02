const express = require("express");
const router = express.Router();
const controller = require("../controller/ProductsController");

router.get("/products", controller.getApiProducts);

router.post("/products", controller.postProducts);

router.delete("/products/:id", controller.deleteProducts);

router.patch("/products/:id", controller.patchProducts);

module.exports = router;
