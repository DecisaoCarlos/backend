import { Atividade } from '../../../framework/sequelize/atividade';

export class GetAtividadeOutput {

    constructor(public patividades: Atividade[]) {
        ///preciso fazer o map para pegar apenas id,descricao,concluido
    }

}