const express = require('express');
const route = express.Router();
const atividadeController = require('./src/controllers/atividadeController');

// Rotas
route.get('/:status', atividadeController.buscar);
route.post('/inserir/register',  atividadeController.register);
route.get('/inserir/concluir/:id/:status',  atividadeController.concluir);
route.get('/deletaatividade/:iddel/:statusdel',  atividadeController.deletar);
module.exports = route;


