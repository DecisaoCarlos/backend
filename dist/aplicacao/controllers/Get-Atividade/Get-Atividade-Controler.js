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
exports.GetAtividadeControle = void 0;
const Get_Atividade_Input_1 = require("../../input/Get-Atividade/Get-Atividade-Input");
const Get_Atividade_Dominio_1 = require("../../../dominio/Get-Atividade/Get-Atividade-Dominio");
const Get_Atividade_Output_1 = require("../../output/Get-Atividade/Get-Atividade-Output");
class GetAtividadeControle {
    constructor() { }
    handle(httpRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            const getatividadeinput = new Get_Atividade_Input_1.GetAtividadeInput(httpRequest);
            const getAtividadeDominio = new Get_Atividade_Dominio_1.GetAtividadeDominio();
            const atividades = yield getAtividadeDominio.handle(getatividadeinput);
            const getatividadeoutput = new Get_Atividade_Output_1.GetAtividadeOutput(atividades);
            //console.log(getatividadeoutput.patividades)
            return getatividadeoutput.patividades;
        });
    }
}
exports.GetAtividadeControle = GetAtividadeControle;
