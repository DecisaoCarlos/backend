const express = require('express');
const route = express.Router();
import { GetAtividadeControle } from '../../aplicacao/controllers/get-atividade/get-atividade';
import { SequelizeGetAtividadeRepositorio } from "../../core/repositorios/buscarAtividade";

// Rotas
route.post('/atividade/listar-atividade', async (req, res) => {

    const sequelizeGetAtividadeRepositorio = new SequelizeGetAtividadeRepositorio();
    const getAtividadesController = new GetAtividadeControle(sequelizeGetAtividadeRepositorio);
    const { body, statusCode } = await getAtividadesController.handle();
    res.status(statusCode).send(body);

});
/*route.post('/atividade/cadastrar',  input.register);
route.patch('/atividade/atualizar-atividade',  input.atualizar);
route.delete('/atividade/deletar/:iddel',  input.deletar);*/
module.exports = route;


