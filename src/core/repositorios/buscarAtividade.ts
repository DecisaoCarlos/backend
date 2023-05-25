const Atividade = require('../../framework/sequelize/atividade');
const Sequelize = require('sequelize');

export class SequelizeGetAtividadeRepositorio {
  async getAtividades(): Promise<Atividade[]> {
    const result = Atividade.findAll({
      order:[
      
      ],
      where: {
        concluido: false
      }
    });
    return result
  }
}
