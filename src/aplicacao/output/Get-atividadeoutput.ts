import { serverError } from '../controllers/helpers';
import { Atividade } from '../../framework/sequelize/atividade';
import { HttpResponse, HttpStatusCode } from '../controllers/protocolo';

export class GetAtividadeOutput {
    
    output(res: HttpResponse<Atividade>, body:string | Atividade[], statusCode:HttpStatusCode ):void{

        res.status(statusCode).send(body);       
    }
}