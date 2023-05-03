const express = require('express');
const route = express.Router();
const atividadeController = require('./src/controllers/atividadeController');

// Rotas
route.post('/atividade/listar-atividade', atividadeController.buscar);
route.post('/atividade/cadastrar',  atividadeController.register);
route.patch('/atividade/atualizar-atividade',  atividadeController.atualizar);
route.delete('/atividade/deletar/:iddel',  atividadeController.deletar);
module.exports = route;


