const Atividade = require('../../framework/sequelize/atividade');
import { HttpResponse } from '../controllers/protocolo';

export interface IGetAtividadeController{
    handle():Promise<HttpResponse<Atividade>>;
}

