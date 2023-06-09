"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validaErro = exports.serverError = exports.badRequest = exports.created = exports.ok = void 0;
const protocolo_1 = require("./protocolo");
const ok = (body) => ({
    statusCode: protocolo_1.HttpStatusCode.OK,
    body,
});
exports.ok = ok;
const created = (body) => ({
    statusCode: protocolo_1.HttpStatusCode.CREATED,
    body,
});
exports.created = created;
const badRequest = (message) => {
    return {
        statusCode: protocolo_1.HttpStatusCode.BAD_REQUEST,
        body: message,
    };
};
exports.badRequest = badRequest;
const serverError = () => {
    return {
        statusCode: protocolo_1.HttpStatusCode.SERVER_ERROR,
        body: "Json Invalido",
    };
};
exports.serverError = serverError;
function validaErro(error) {
    const retorno = {
        descricao: '',
        codigo: 400
    };
    if (error instanceof Error) {
        retorno.descricao = error.message;
    }
    else {
        retorno.descricao = JSON.stringify(error);
    }
    return retorno;
}
exports.validaErro = validaErro;
