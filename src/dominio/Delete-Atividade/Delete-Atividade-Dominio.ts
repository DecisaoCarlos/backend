import { Atividade } from '../../framework/sequelize/atividade';
import { HttpRequest, IGetatividade } from '../../aplicacao/controllers/protocolo';
import { DeleteAtividadeRepositorio } from '../../core/repositorios/Delete-Atividade'

export class DeleteAtividadeDominio {

    public async handle(atividade: Atividade | undefined): Promise<void> {
        const deleteAtividadeRepositorio = new DeleteAtividadeRepositorio();
        deleteAtividadeRepositorio.DeleteAtividade(atividade);
        return
    }

}
