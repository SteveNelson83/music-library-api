const express = require('express');
const artistController = require('../src/controllers/artists');
const albumController = require('../src/controllers/albums');

const app = express();
app.use(express.json());
app.post('/artists', artistController.create);
app.get('/artists', artistController.list);
app.get('/artists/:id', artistController.searchById);
app.patch('/artists/:id', artistController.update);
app.delete('/artists/:id', artistController.delete);
app.post('/artists/:id/albums', albumController.create);
app.get('/artists/:id/albums', albumController.list);
app.patch('/artists/:id/albums/:id', albumController.update);

module.exports = app;
