import { Atividade } from '../../../dominio/Models/Atividade';

export class BuscarAtividadeOutput {

    constructor(public atividades: Atividade[]) {
        ///preciso fazer o map para pegar apenas id,descricao,concluido
    }

}