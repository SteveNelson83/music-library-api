const express = require('express');
const artistController = require('../src/controllers/artists');

const app = express();
app.use(express.json());
app.post('/artists', artistController.create);
app.get('/artists', artistController.list);

module.exports = app;
