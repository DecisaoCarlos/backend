const SeqAtividade = require('../../framework/sequelize/atividade');
import { IGetatividade, HttpRequest } from 'src/aplicacao/controllers/protocolo';
import { Atividade } from '../../framework/sequelize/atividade';
export class GetAtividadeRepositorio {

  public async getAtividades(iGetatividade: IGetatividade): Promise<Atividade[]> {
    const isconcluido = iGetatividade.estadoDaAtividade    
    let order = 'createdAt'
    if (isconcluido === true) {
      order = 'updatedAt'
    }
    const result = SeqAtividade.findAll({
      order: [
        [order, 'DESC'],
      ],
      where: {
        concluido: isconcluido
      }
    });
    return result
  }

}
