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
exports.DeleteAtividadeDominio = void 0;
const Delete_Atividade_1 = require("../../core/repositorios/Delete-Atividade");
class DeleteAtividadeDominio {
    handle(atividade) {
        return __awaiter(this, void 0, void 0, function* () {
            const deleteAtividadeRepositorio = new Delete_Atividade_1.DeleteAtividadeRepositorio();
            deleteAtividadeRepositorio.DeleteAtividade(atividade);
            return;
        });
    }
}
exports.DeleteAtividadeDominio = DeleteAtividadeDominio;
