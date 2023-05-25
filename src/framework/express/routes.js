const express = require('express');
const route = express.Router();
const input = require('../../aplicacao/controllers/input/filtraAtividade');

// Rotas
route.post('/atividade/listar-atividade', input.filtrar);
/*route.post('/atividade/cadastrar',  input.register);
route.patch('/atividade/atualizar-atividade',  input.atualizar);
route.delete('/atividade/deletar/:iddel',  input.deletar);*/
module.exports = route;


