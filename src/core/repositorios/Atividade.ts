import {IPatchatividade } from 'src/aplicacao/controllers/protocolo';

const SeqAtividade = require('../../framework/sequelize/atividade');
export class PatchAtividadeRepositorio {

  public async AlterarConcluidoAtividade(input: IPatchatividade ): Promise<void> {
    const isconcluido = input.estadoDaAtividade
    let estadoDaAtividade = true
    if (isconcluido === true) {
      estadoDaAtividade = false
    }
    const atividade = await SeqAtividade.findByPk(input?.id);
    if (input.descricao) {
      atividade.descricao = input.descricao;
    } else {
      atividade.concluido = estadoDaAtividade;
    }
    const resultadoSave = await atividade.save();

  }

}