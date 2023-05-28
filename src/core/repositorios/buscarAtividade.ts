const SeqAtividade = require('../../framework/sequelize/atividade');
import { Atividade } from '../../framework/sequelize/atividade';
export class SequelizeGetAtividadeRepositorio {

  async getAtividades(): Promise<Atividade[]> {
    const result = SeqAtividade.findAll({
      order:[
      
      ],
      where: {
        concluido: false
      }
    });
    return result
  }
  
}
