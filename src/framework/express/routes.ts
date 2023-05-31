
const express = require('express');
const route = express.Router();
import { PostAtividadeController } from '../../aplicacao/controllers/Post-Atividade/Post-Atividade-Controler';
import { GetAtividadeControle } from '../../aplicacao/controllers/Get-Atividade/Get-Atividade-Controler';
import { PatchAtividadeControle } from '../../aplicacao/controllers/Patch-Atividade/Patch-Atividade-Controler';

// Rotas
route.post('/atividade/listar-atividade', async (req, res) => {
    const getAtividadesController = new GetAtividadeControle({ body: req.body }, res);
    getAtividadesController.handle();
});

route.post('/atividade/cadastrar',  async (req, res) => {
    const postAtividadesController = new PostAtividadeController({ body: req.body }, res);
    postAtividadesController.handle();
});


route.patch('/atividade/atualizar-atividade', async (req, res) => {
    const patchAtividadesController = new PatchAtividadeControle({ body: req.body }, res);
    patchAtividadesController.handle();
});/*
route.delete('/atividade/deletar/:iddel',  input.deletar);*/
module.exports = route;


