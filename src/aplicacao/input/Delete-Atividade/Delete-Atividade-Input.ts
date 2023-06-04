import { Atividade } from 'src/framework/sequelize/atividade';
import { HttpRequest, HttpResponse } from '../../controllers/protocolo';
import { DeleteAtividadeOutput } from '../../output/Delete-Atividade/Delete-Atividade-Output';
import { serverError } from '../../controllers/helpers';

export class DeleteAtividadeInput {

    public validabody(request: HttpRequest<Atividade>, response: HttpResponse<string>): void {
        const requiredFields = ["iddel"];
          
        if (requiredFields in request.body) {            
            if (request.body?.iddel != null && request.body?.iddel !== undefined) {
                return
            }
        }
        const deleteAtividadeOutput = new DeleteAtividadeOutput();
        const { body, statusCode } = serverError();
        deleteAtividadeOutput.output(response, body, statusCode);              
    }

}