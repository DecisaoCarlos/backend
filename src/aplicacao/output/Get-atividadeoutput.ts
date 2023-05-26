import { serverError } from '../controllers/helpers';
import { Atividade } from '../../framework/sequelize/atividade';
import { HttpResponse, HttpStatusCode } from '../controllers/protocolo';

export class GetAtividadeOutput {

    output(res, body:string | Atividade[], statusCode:HttpStatusCode ){

        res.status(statusCode).send(body);       
    }
}