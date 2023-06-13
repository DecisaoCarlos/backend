import { HttpRequest } from 'src/aplicacao/controllers/protocolo';
import { IGetatividade } from '../../controllers/protocolo';

export class BuscarAtividadeInput {
    public estadoDaAtividade: boolean;
    constructor(body: HttpRequest<IGetatividade>) {
        const requiredFields = ['estadoDaAtividade'];
        for (let campo of requiredFields) {
            if (body.body != null && body.body !== undefined) {
                if (campo in body.body) {
                    if (body.body?.estadoDaAtividade === true || body.body?.estadoDaAtividade === false) {
                        this.estadoDaAtividade = body.body?.estadoDaAtividade;
                        return 
                    }
                    throw new Error("estadoDaAtividade deve ser boolean")
                }
                throw new Error("Json deve conter o campo estadoDaAtividade ")
            }           
        }

        throw new Error("Json invalido")
    }

}