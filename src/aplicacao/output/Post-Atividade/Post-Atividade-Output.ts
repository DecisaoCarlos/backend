import { serverError } from '../../controllers/helpers';
import { Atividade } from '../../../framework/sequelize/atividade';
import { HttpResponse, HttpStatusCode } from '../../controllers/protocolo';

export class PostAtividadeOutput {

    output(httpResponse: HttpResponse<string>, body: string | Atividade[], statusCode: HttpStatusCode): void {
        
        httpResponse.status(statusCode).send(body);
    }
}