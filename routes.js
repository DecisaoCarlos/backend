const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const atividadeController = require('./src/controllers/atividadeController');

// Rotas da home
route.get('/:status', homeController.paginaInicial);



route.get('/inserir', atividadeController.start);
route.post('/inserir/register',  atividadeController.register);
route.get('/inserir/concluir/:id/:status',  atividadeController.concluir);
route.get('/atividadeconcluida',  atividadeController.concluida);
route.get('/deletaatividade/:iddel/:statusdel',  atividadeController.deletar);
module.exports = route;


