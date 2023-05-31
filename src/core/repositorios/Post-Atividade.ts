import { Atividade } from "src/framework/sequelize/atividade";
const SeqAtividade = require('../../framework/sequelize/atividade');
export class PostAtividadeRepositorio {

    async CreateAtividade(atividade: Atividade | undefined) {
        const today = new Date();
        const resultadoCreate = await SeqAtividade.create({
            descricao: atividade?.descricao,
            concluido: false,
        })
    }

}