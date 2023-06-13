import { IDeleteatividade } from '../../aplicacao/controllers/protocolo';
import { DeleteAtividadeRepositorio } from '../../core/repositorios/Atividade'

export class DeleteAtividadeDominio {

    public async handle(id: IDeleteatividade): Promise<void> {
        const deleteAtividadeRepositorio = new DeleteAtividadeRepositorio();
        deleteAtividadeRepositorio.DeleteAtividade(id);
        return
    }

}
