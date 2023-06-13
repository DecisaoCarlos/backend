import { HttpRequest, IPostatividade } from '../../controllers/protocolo';

export class CadastrarAtividadeInput {
    public descricao: string = '';
    constructor(request: HttpRequest<IPostatividade>) {        
        const requiredFields = ["descricao"];
        for (let campo of requiredFields) {
            if (request.body?.descricao != null && request.body?.descricao !== undefined) {
                if (campo in request.body) {
                    this.descricao = request.body.descricao;
                    return
                }
                throw new Error("Campo descricao não encontrado");
            }
            throw new Error("Campo não pode ser vazio");
        }
        throw new Error("Json Invalid");
    }

}