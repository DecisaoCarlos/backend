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
      const deleteAtividadeOutput = new DeleteAtividadeOutput(deleteAtividadeInput);
      return deleteAtividadeOutput.retorno
      
    } catch (error) {
      return
    }
  }
}