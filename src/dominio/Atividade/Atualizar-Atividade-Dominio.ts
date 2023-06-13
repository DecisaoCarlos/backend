import { IPatchatividade } from '../../aplicacao/controllers/protocolo';
import { AtualizarAtividadeRepositorio } from '../../core/repositorios/Atividade';


export class AtualizarAtividadeDominio {

    public async handle(atividade: IPatchatividade): Promise<void> {
        const sequelizeCreateAtividadeRepositorio = new AtualizarAtividadeRepositorio();
        const datividade = sequelizeCreateAtividadeRepositorio.AlterarConcluidoAtividade(atividade);
        return
    }

}
