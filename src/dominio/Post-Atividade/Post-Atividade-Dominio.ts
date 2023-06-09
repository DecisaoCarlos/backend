import { IPostatividade } from '../../aplicacao/controllers/protocolo';
import { PostAtividadeRepositorio } from "../../core/repositorios/Post-Atividade";

export class PostAtividadeDominio {

    public async handle(atividade: IPostatividade): Promise<void> {
        const sequelizeCreateAtividadeRepositorio = new PostAtividadeRepositorio();
        sequelizeCreateAtividadeRepositorio.CreateAtividade(atividade);
        return
    }

}
