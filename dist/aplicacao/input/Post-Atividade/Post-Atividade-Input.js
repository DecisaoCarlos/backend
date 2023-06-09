"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostAtividadeInput = void 0;
class PostAtividadeInput {
    constructor(request) {
        var _a, _b;
        this.descricao = '';
        const requiredFields = ["descricao"];
        for (let campo of requiredFields) {
            if (((_a = request.body) === null || _a === void 0 ? void 0 : _a.descricao) != null && ((_b = request.body) === null || _b === void 0 ? void 0 : _b.descricao) !== undefined) {
                if (campo in request.body) {
                    this.descricao = request.body.descricao;
                    return;
                }
                throw new Error("Campo descricao não encontrado");
            }
            throw new Error("Campo não pode ser vazio");
        }
        throw new Error("Json Invalid");
    }
}
exports.PostAtividadeInput = PostAtividadeInput;
