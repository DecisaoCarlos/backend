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
exports.GetAtividadeDominio = void 0;
const Get_Atividade_1 = require("../../core/repositorios/Get-Atividade");
class GetAtividadeDominio {
    constructor() { }
    handle(IGetatividade) {
        return __awaiter(this, void 0, void 0, function* () {
            const sequelizeGetAtividadeRepositorio = new Get_Atividade_1.GetAtividadeRepositorio();
            return yield sequelizeGetAtividadeRepositorio.getAtividades(IGetatividade);
        });
    }
}
exports.GetAtividadeDominio = GetAtividadeDominio;
