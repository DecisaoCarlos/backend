import { IPatchatividade } from "src/aplicacao/controllers/protocolo";

export class AtualizarAtividadeOutput {
    retorno:any;
    constructor(public atividade:IPatchatividade) {
        this.retorno = {Mensagem: 'Atividade ' + atividade.id + ' atualizada com sucesso'}
        
    }
}