import { DeleteAtividadeOutput } from '../../output/Atividade/Deletar-Atividade-Output';
import { DeleteAtividadeInput } from '../../input/Atividade/Deletar-Atividade-Input';
import { DeleteAtividadeDominio } from '../../../dominio/Atividade/Deletar-Atividade-Dominio';



export class DeleteAtividadeController {
  constructor() { }

  public async handle(id: number): Promise<void> {
    try {

      const deleteAtividadeInput = new DeleteAtividadeInput(id)
      const deleteAtividadeDominio = new DeleteAtividadeDominio()
      deleteAtividadeDominio.handle(deleteAtividadeInput);

      //  deleteAtividadeDominio.handle(this.httpRequest.body);

      //    const deleteAtividadeOutput = new DeleteAtividadeOutput();

    } catch (error) {
      return
    }
  }
}