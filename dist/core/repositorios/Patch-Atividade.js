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
exports.PatchAtividadeRepositorio = void 0;
const SeqAtividade = require('../../framework/sequelize/atividade');
class PatchAtividadeRepositorio {
    AlterarConcluidoAtividade(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const isconcluido = input.estadoDaAtividade;
            let estadoDaAtividade = true;
            if (isconcluido === true) {
                estadoDaAtividade = false;
            }
            const atividade = yield SeqAtividade.findByPk(input === null || input === void 0 ? void 0 : input.id);
            if (input.descricao) {
                atividade.descricao = input.descricao;
            }
            else {
                atividade.concluido = estadoDaAtividade;
            }
            const resultadoSave = yield atividade.save();
        });
    }
}
exports.PatchAtividadeRepositorio = PatchAtividadeRepositorio;
