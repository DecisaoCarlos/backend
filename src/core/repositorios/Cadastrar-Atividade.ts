import { IPostatividade } from "src/aplicacao/controllers/protocolo";
const SeqAtividade = require('../../framework/sequelize/atividade');
export class PostAtividadeRepositorio {

    public async CreateAtividade(atividade: IPostatividade) {        
        const resultadoCreate = await SeqAtividade.create({
            descricao: atividade.descricao,
            concluido: false,
        })
    }

}