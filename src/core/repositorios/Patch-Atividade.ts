import { IGetatividade } from 'src/aplicacao/controllers/protocolo';
import { Atividade } from "src/framework/sequelize/atividade";
const SeqAtividade = require('../../framework/sequelize/atividade');
export class PatchAtividadeRepositorio {

  async AlterarConcluidoAtividade(input: IGetatividade | undefined): Promise<void> {
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
   
  }

}