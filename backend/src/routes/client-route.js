const express = require('express');
const client = require('../controllers/client-controler')

const route = express.Router();

route.post('/register', client.create);
route.get('/client', client.read);
route.put('/client/:id', client.update);
route.delete('/client/:id', client.delete)

module.exports = route;