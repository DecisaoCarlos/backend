import { Atividade } from '../../../framework/sequelize/atividade';

export class PostAtividadeOutput {

    constructor(public patividades: Atividade[]) {
        ///preciso fazer o map para pegar apenas id,descricao,concluido
    }

}