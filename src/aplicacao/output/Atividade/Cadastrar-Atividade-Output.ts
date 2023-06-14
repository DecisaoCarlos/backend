import { IPostatividade } from "src/aplicacao/controllers/protocolo";

export class PostAtividadeOutput {
    retorno :any;
    constructor(public atividade: IPostatividade) {          
        this.retorno = {Mensagem: 'Atividade ' + atividade.descricao + ' criada com sucesso'}
    }

}
