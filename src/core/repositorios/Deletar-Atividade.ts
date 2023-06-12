import { IDeleteatividade } from "src/aplicacao/controllers/protocolo";

const SeqAtividade = require('../../framework/sequelize/atividade');
export class DeleteAtividadeRepositorio {

    public async DeleteAtividade(id:IDeleteatividade) {        
        await SeqAtividade.destroy({ where: { id: id.id } });
    }

}