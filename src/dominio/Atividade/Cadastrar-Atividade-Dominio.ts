import { IPostatividade } from '../../aplicacao/controllers/protocolo';
import { CadastrarAtividadeRepositorio } from "../../core/repositorios/Atividade";

export class CadastrarAtividadeDominio {

    public async handle(atividade: IPostatividade): Promise<void> {
        const sequelizeCreateAtividadeRepositorio = new CadastrarAtividadeRepositorio();
        sequelizeCreateAtividadeRepositorio.CreateAtividade(atividade);
        return
    }

}
