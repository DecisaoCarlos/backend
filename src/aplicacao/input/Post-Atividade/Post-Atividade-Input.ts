import { Atividade } from 'src/framework/sequelize/atividade';
import { HttpRequest, HttpResponse } from '../../controllers/protocolo';
import { PostAtividadeOutput } from '../../output/Post-Atividade/Post-Atividade-Output';
import { serverError } from '../../controllers/helpers';

export class PostAtividadeInput {

    validabody(request: HttpRequest<Atividade>, response: HttpResponse<string>): void {
        const requiredFields = ["descricao"];
        if (requiredFields in request.body) {
            if (request.body?.descricao != null && request.body?.descricao !== undefined) {
                return
            }
        }

        const createAtividadeOutput = new PostAtividadeOutput();
        const { body, statusCode } = serverError();
        createAtividadeOutput.output(response, body, statusCode);
        throw new Error("Json Invalid");
    }

}