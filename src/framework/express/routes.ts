
const express = require('express');
const route = express.Router();
import { GetAtividadeControle } from '../../aplicacao/controllers/get-atividade/get-atividadecontroler';
import { SequelizeGetAtividadeRepositorio } from "../../core/repositorios/buscarAtividade";

// Rotas
//route.post('/atividade/listar-atividade',  GetAtividadeControle);
route.post('/atividade/listar-atividade', async (req, res) => {
    const getAtividadesController = new GetAtividadeControle(req, res);
    getAtividadesController.handle();
});
/*route.post('/atividade/cadastrar',  input.register);
route.patch('/atividade/atualizar-atividade',  input.atualizar);
route.delete('/atividade/deletar/:iddel',  input.deletar);*/
module.exports = route;


