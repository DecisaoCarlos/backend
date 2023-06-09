"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteAtividadeOutput = void 0;
class DeleteAtividadeOutput {
    output(httpResponse, body, statusCode) {
        httpResponse.status(statusCode).send(body);
    }
}
exports.DeleteAtividadeOutput = DeleteAtividadeOutput;
