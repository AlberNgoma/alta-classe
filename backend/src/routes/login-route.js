const express = require("express");
const login = require("../controllers/login-controller");


const route = express.Router();

route.post('/login',login.login );

module.exports = route;