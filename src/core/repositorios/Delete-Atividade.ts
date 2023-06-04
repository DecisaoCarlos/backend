import { Atividade } from "src/framework/sequelize/atividade";
const SeqAtividade = require('../../framework/sequelize/atividade');
export class DeleteAtividadeRepositorio {

    public async DeleteAtividade(atividade: Atividade | undefined) {
        const iddel = atividade.iddel
        await SeqAtividade.destroy({ where: { id: iddel } });
    }

}