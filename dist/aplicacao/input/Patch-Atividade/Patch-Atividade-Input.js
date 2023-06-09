"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatchAtividadeInput = void 0;
class PatchAtividadeInput {
    constructor(httpBody) {
        var _a, _b;
        this.descricao = '';
        this.id = 0;
        const requiredFields = ["estadoDaAtividade", "id", "descricao"];
        for (let campo of requiredFields) {
            if (httpBody.body != null && httpBody.body !== undefined) {
                if (campo in httpBody.body) {
                    if (httpBody.body.estadoDaAtividade != null && httpBody.body.estadoDaAtividade !== undefined) {
                        // if (httpBody.body.descricao != null && httpBody.body.descricao !== undefined) {
                        if (httpBody.body.id != null && httpBody.body.id !== undefined) {
                            this.estadoDaAtividade = (_a = httpBody.body) === null || _a === void 0 ? void 0 : _a.estadoDaAtividade;
                            this.id = (_b = httpBody.body) === null || _b === void 0 ? void 0 : _b.id;
                            //   this.descricao = httpBody.body?.descricao
                            return;
                            //  }
                        }
                        throw new Error("Campo Id não pode ser vazio");
                    }
                    throw new Error("Campo estadoDaAtividade não pode ser vazio");
                }
                throw new Error("Campo " + campo + " não encontrato");
            }
            throw new Error("Json inválido");
        }
    }
}
exports.PatchAtividadeInput = PatchAtividadeInput;
