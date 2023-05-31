import { IGetatividade } from 'src/aplicacao/controllers/protocolo';
import { Atividade } from "src/framework/sequelize/atividade";
const SeqAtividade = require('../../framework/sequelize/atividade');
export class PatchAtividadeRepositorio {

  async AlterarConcluidoAtividade(input: IGetatividade | undefined): Promise<Atividade> {
    const isconcluido = input.estadoDaAtividade
    let ordena = 'createdAt';
    let estadoDaAtividade = true
    if (isconcluido === true) {
      ordena = 'updatedAt';
      estadoDaAtividade = false
    }

    const atividade = await SeqAtividade.findByPk(input?.id);
    atividade.concluido = estadoDaAtividade;
    const resultadoSave = await atividade.save();
    // aqui poderia finalizar a requizição
    // para poupar uma nova requisição para atualizar a pagina ja devolvo a busca atualizada

    const lista = await SeqAtividade.findAll({
      order:[
        [ ordena, 'DESC'],
      ],
      where: {
        concluido: isconcluido
      }
    });  
    return lista
  }

}