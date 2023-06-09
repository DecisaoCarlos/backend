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
exports.PostAtividadeController = void 0;
const Post_Atividade_Dominio_1 = require("../../../dominio/Post-Atividade/Post-Atividade-Dominio");
const Post_Atividade_Input_1 = require("../../input/Post-Atividade/Post-Atividade-Input");
class PostAtividadeController {
    constructor() { }
    handle(httpRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            const postAtividadeInput = new Post_Atividade_Input_1.PostAtividadeInput(httpRequest);
            const postAtividadeDominio = new Post_Atividade_Dominio_1.PostAtividadeDominio();
            postAtividadeDominio.handle(postAtividadeInput);
            //        const postAtividadeOutput = new PostAtividadeOutput();
            return;
        });
    }
}
exports.PostAtividadeController = PostAtividadeController;
