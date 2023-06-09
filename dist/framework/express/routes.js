"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Post_Atividade_Controler_1 = require("../../aplicacao/controllers/Post-Atividade/Post-Atividade-Controler");
const Get_Atividade_Controler_1 = require("../../aplicacao/controllers/Get-Atividade/Get-Atividade-Controler");
const Patch_Atividade_Controler_1 = require("../../aplicacao/controllers/Patch-Atividade/Patch-Atividade-Controler");
const Delete_Atividade_Controler_1 = require("../../aplicacao/controllers/Delete-Atividade/Delete-Atividade-Controler");
const helpers_1 = require("../../aplicacao/controllers/helpers");
const protocolo_1 = require("../../aplicacao/controllers/protocolo");
const route = (0, express_1.Router)();
// Rotas
route.post('/atividade/listar-atividade', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getAtividadesController = new Get_Atividade_Controler_1.GetAtividadeControle();
        const atividades = yield getAtividadesController.handle({ body: req.body, });
        res.status(protocolo_1.HttpStatusCode.OK).send(atividades);
    }
    catch (error) {
        const retorno = (0, helpers_1.validaErro)(error);
        res.status(retorno.codigo).send(retorno.descricao);
    }
}));
route.post('/atividade/cadastrar', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const postAtividadesController = new Post_Atividade_Controler_1.PostAtividadeController();
        postAtividadesController.handle({ body: req.body });
        res.status(protocolo_1.HttpStatusCode.CREATED).send('Sucesso');
    }
    catch (error) {
        const retorno = (0, helpers_1.validaErro)(error);
        res.status(retorno.codigo).send(retorno.descricao);
    }
}));
route.patch('/atividade/atualizar-atividade', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const patchAtividadesController = new Patch_Atividade_Controler_1.PatchAtividadeControle();
        patchAtividadesController.handle({ body: req.body });
    }
    catch (error) {
        const retorno = (0, helpers_1.validaErro)(error);
        res.status(retorno.codigo).send(retorno.descricao);
    }
}));
route.delete('/atividade/deletar/:iddel', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deleteAtividadeController = new Delete_Atividade_Controler_1.DeleteAtividadeController({ body: req.params });
        deleteAtividadeController.handle();
    }
    catch (error) {
        const retorno = (0, helpers_1.validaErro)(error);
        res.status(retorno.codigo).send(retorno.descricao);
    }
}));
module.exports = route;
