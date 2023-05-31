import { Atividade } from '../../../framework/sequelize/atividade';
import { serverError } from '../../controllers/helpers';
import { PatchAtividadeOutput } from '../../output/Patch-Atividade/Patch-Atividade-Output';
import { HttpRequest, IGetatividade, HttpResponse } from '../../controllers/protocolo';

export class PatchAtividadeInput {
    validabody(request: HttpRequest<IGetatividade>, response: HttpResponse<string>): void {
        const requiredFields = ["estadoDaAtividade", "id"];
        let valido = 0
        requiredFields.forEach(function (field) {
            if (field in request.body) {
                if (request.body?.field != null && request.body?.field !== undefined) {
                    valido = 1  // só chega aqui correto                    
                }
                valido = 0
            }

            //a cada loop se um for falso irá invalidar toda a requisição
            if (valido = 0) {
                const patchAtividadeOutput = new PatchAtividadeOutput();
                const { body, statusCode } = serverError();
                patchAtividadeOutput.output(response, body, statusCode);
                throw new Error("Json Invalid");
            } else {
                return
            }
        });
    }

}