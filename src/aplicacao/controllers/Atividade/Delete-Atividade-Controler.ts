import { DeleteAtividadeOutput } from '../../output/Atividade/Delete-Atividade-Output';
import { DeleteAtividadeInput } from '../../input/Atividade/Delete-Atividade-Input';
import { HttpRequest } from '../protocolo';
import { DeleteAtividadeDominio } from '../../../dominio/Delete-Atividade/Delete-Atividade-Dominio';


export class DeleteAtividadeController {
    constructor() { }

    public async handle(HttpRequest:HttpRequest<>): Promise<void> {
        try {

            const deleteAtividadeInput = new DeleteAtividadeInput()
            const deleteAtividadeDominio = new DeleteAtividadeDominio()
            const deleteAtividadeOutput = new DeleteAtividadeOutput();
            //input validar dados de entrada da requisição  
          //  deleteAtividadeInput.validabody(this.httpRequest, this.HttpResponse);

            //dominio/casos de uso>repositorio>>banco            
          //  deleteAtividadeDominio.handle(this.httpRequest.body);

            //chama output com os dados para tratar saida             
            const { body, statusCode } = ok<Atividade>('sucesso')
          //  deleteAtividadeOutput.output(this.HttpResponse, body, statusCode);

        } catch (error) {
            return
        }
    }
}