const express = require('express');
const artistController = require('../src/controllers/artists');

const app = express();
app.use(express.json());
app.post('/artists', artistController.create);
app.get('/artists', artistController.list);
app.get('/artists/:id', artistController.searchById);
app.patch('/artists/:id', artistController.update);
app.delete('/artists/:id', artistController.delete);

module.exports = app;
