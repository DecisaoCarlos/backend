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
exports.DeleteAtividadeController = void 0;
const Delete_Atividade_Output_1 = require("../../output/Delete-Atividade/Delete-Atividade-Output");
const Delete_Atividade_Input_1 = require("../../input/Delete-Atividade/Delete-Atividade-Input");
const helpers_1 = require("../helpers");
const Delete_Atividade_Dominio_1 = require("../../../dominio/Delete-Atividade/Delete-Atividade-Dominio");
class DeleteAtividadeController {
    constructor() { }
    handle() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const deleteAtividadeInput = new Delete_Atividade_Input_1.DeleteAtividadeInput();
                const deleteAtividadeDominio = new Delete_Atividade_Dominio_1.DeleteAtividadeDominio();
                const deleteAtividadeOutput = new Delete_Atividade_Output_1.DeleteAtividadeOutput();
                //input validar dados de entrada da requisição  
                //  deleteAtividadeInput.validabody(this.httpRequest, this.HttpResponse);
                //dominio/casos de uso>repositorio>>banco            
                //  deleteAtividadeDominio.handle(this.httpRequest.body);
                //chama output com os dados para tratar saida             
                const { body, statusCode } = (0, helpers_1.ok)('sucesso');
                //  deleteAtividadeOutput.output(this.HttpResponse, body, statusCode);
            }
            catch (error) {
                return;
            }
        });
    }
}
exports.DeleteAtividadeController = DeleteAtividadeController;
