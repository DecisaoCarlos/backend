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
exports.PatchAtividadeControle = void 0;
const Patch_Atividade_Input_1 = require("../../input/Patch-Atividade/Patch-Atividade-Input");
const Patch_Atividade_Dominio_1 = require("../../../dominio/Patch-Atividade /Patch-Atividade-Dominio");
class PatchAtividadeControle {
    constructor() { }
    handle(httpBody) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const patchAtividadeInput = new Patch_Atividade_Input_1.PatchAtividadeInput(httpBody);
                const patchAtividadeDominio = new Patch_Atividade_Dominio_1.PatchAtividadeDominio();
                yield patchAtividadeDominio.handle(patchAtividadeInput);
            }
            catch (error) {
                return;
            }
        });
    }
}
exports.PatchAtividadeControle = PatchAtividadeControle;
