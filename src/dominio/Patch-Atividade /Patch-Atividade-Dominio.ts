import { Atividade } from '../../framework/sequelize/atividade';
import { HttpRequest, IGetatividade } from '../../aplicacao/controllers/protocolo';
import { PatchAtividadeRepositorio } from '../../core/repositorios/Patch-Atividade';


export class PatchAtividadeDominio {

    async handle(atividade: IGetatividade | undefined): Promise<void> {
        const sequelizeCreateAtividadeRepositorio = new PatchAtividadeRepositorio();
        const datividade = sequelizeCreateAtividadeRepositorio.AlterarConcluidoAtividade(atividade);
        return 
    }
    
}
