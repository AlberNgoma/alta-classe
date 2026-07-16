const express = require("express");
const product = require("../controllers/product-controller");
const upload = require("../config/multer-config");

const route = express.Router();

route.post('/product', upload.single('picture'), product.create);
route.get('/product', product.read)
route.put('/product/:id', upload.single('picture'), product.update)
route.delete('/product/:id', product.delete)

module.exports = route;