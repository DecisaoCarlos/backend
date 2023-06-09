"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteAtividadeInput = void 0;
const Delete_Atividade_Output_1 = require("../../output/Delete-Atividade/Delete-Atividade-Output");
const helpers_1 = require("../../controllers/helpers");
class DeleteAtividadeInput {
    validabody(request, response) {
        var _a, _b;
        const requiredFields = ["iddel"];
        if (requiredFields in request.body) {
            if (((_a = request.body) === null || _a === void 0 ? void 0 : _a.iddel) != null && ((_b = request.body) === null || _b === void 0 ? void 0 : _b.iddel) !== undefined) {
                return;
            }
        }
        const deleteAtividadeOutput = new Delete_Atividade_Output_1.DeleteAtividadeOutput();
        const { body, statusCode } = (0, helpers_1.serverError)();
        deleteAtividadeOutput.output(response, body, statusCode);
    }
}
exports.DeleteAtividadeInput = DeleteAtividadeInput;
