import { Atividade } from '../../framework/sequelize/atividade';
import { HttpRequest, IGetatividade } from '../../aplicacao/controllers/protocolo';
import { PostAtividadeRepositorio } from "../../core/repositorios/Post-Atividade";

export class PostAtividadeDominio {

    public async handle(atividade: Atividade | undefined): Promise<void> {
        const sequelizeCreateAtividadeRepositorio = new PostAtividadeRepositorio();
        sequelizeCreateAtividadeRepositorio.CreateAtividade(atividade);
        return
    }

}
