import { IGetatividade } from 'src/aplicacao/controllers/protocolo';
import { Atividade } from "src/framework/sequelize/atividade";
const SeqAtividade = require('../../framework/sequelize/atividade');
export class PatchAtividadeRepositorio {

  public async AlterarConcluidoAtividade(input: IGetatividade | undefined): Promise<void> {
    const isconcluido = input.estadoDaAtividade
    let estadoDaAtividade = true
    if (isconcluido === true) {
      estadoDaAtividade = false
    }
    const atividade = await SeqAtividade.findByPk(input?.id);
    // se é para atualizar a descrição ou alterar o estado de conclusão
    if (input.descricao) {
      atividade.descricao = input.descricao;
    } else {
      atividade.concluido = estadoDaAtividade;
    }
    const resultadoSave = await atividade.save();

  }

}