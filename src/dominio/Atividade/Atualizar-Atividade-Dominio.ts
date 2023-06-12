import { IPatchatividade } from '../../aplicacao/controllers/protocolo';
import { PatchAtividadeRepositorio } from '../../core/repositorios/Atualizar-Atividade';


export class PatchAtividadeDominio {

    public async handle(atividade: IPatchatividade): Promise<void> {
        const sequelizeCreateAtividadeRepositorio = new PatchAtividadeRepositorio();
        const datividade = sequelizeCreateAtividadeRepositorio.AlterarConcluidoAtividade(atividade);
        return
    }

}
