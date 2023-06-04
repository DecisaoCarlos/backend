import { Atividade } from './../../../framework/sequelize/atividade';
import { serverError } from '../../controllers/helpers';
import { GetAtividadeOutput } from '../../output/Get-Atividade/Get-Atividade-Output';
import { HttpRequest, IGetatividade, HttpResponse } from '../../controllers/protocolo';

export class GetAtividadeInput {
    public validabody(request: HttpRequest<IGetatividade>, response: HttpResponse<string>): void {
        const requiredFields = ["estadoDaAtividade"];
        if (requiredFields in request.body) {
            if (request.body != null && request.body !== undefined) {
                if (request.body.estadoDaAtividade === true || request.body.estadoDaAtividade === false) {
                    return  // se chegou aqui está correto
                }
            }
        }

        const getAtividadeOutput = new GetAtividadeOutput();
        const { body, statusCode } = serverError();
        getAtividadeOutput.output(response, body, statusCode);
        throw new Error("Json Invalid");
    }

}