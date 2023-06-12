import { Atividade } from '../../framework/sequelize/atividade';
import { HttpRequest, IDeleteatividade, IGetatividade } from '../../aplicacao/controllers/protocolo';
import { DeleteAtividadeRepositorio } from '../../core/repositorios/Deletar-Atividade'

export class DeleteAtividadeDominio {

    public async handle(id: IDeleteatividade): Promise<void> {
        const deleteAtividadeRepositorio = new DeleteAtividadeRepositorio();
        deleteAtividadeRepositorio.DeleteAtividade(id);
        return
    }

}
