const express = require("express");
const product = require("../controllers/product-controller");
const upload = require("../config/multer-config");

const route = express.Router();

route.post('/product', upload.single('picture'), product.create);

module.exports = route;