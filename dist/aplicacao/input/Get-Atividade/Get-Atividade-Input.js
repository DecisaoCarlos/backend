"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAtividadeInput = void 0;
class GetAtividadeInput {
    constructor(body) {
        var _a, _b, _c;
        const requiredFields = ['estadoDaAtividade'];
        for (let campo of requiredFields) {
            if (body.body != null && body.body !== undefined) {
                if (campo in body.body) {
                    if (((_a = body.body) === null || _a === void 0 ? void 0 : _a.estadoDaAtividade) === true || ((_b = body.body) === null || _b === void 0 ? void 0 : _b.estadoDaAtividade) === false) {
                        this.estadoDaAtividade = (_c = body.body) === null || _c === void 0 ? void 0 : _c.estadoDaAtividade;
                        return;
                    }
                    throw new Error("estadoDaAtividade deve ser boolean");
                }
                throw new Error("Json deve conter o campo estadoDaAtividade ");
            }
        }
        throw new Error("Json invalido");
    }
}
exports.GetAtividadeInput = GetAtividadeInput;
