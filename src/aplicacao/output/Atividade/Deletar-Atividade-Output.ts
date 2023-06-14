import { IDeleteatividade } from "src/aplicacao/controllers/protocolo";

export class DeleteAtividadeOutput {
    retorno:any;
    constructor(public atividade:IDeleteatividade) {
        this.retorno = {Mensagem: 'Atividade ' + atividade.id + ' excluida com sucesso'}
        
    }
}
