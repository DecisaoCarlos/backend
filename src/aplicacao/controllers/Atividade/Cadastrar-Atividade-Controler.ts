import { Atividade } from '../../../dominio/Models/Atividade'
import { PostAtividadeOutput } from '../../output/Atividade/Cadastrar-Atividade-Output';
import { CadastrarAtividadeDominio } from '../../../dominio/Atividade/Cadastrar-Atividade-Dominio';
import { CadastrarAtividadeInput } from '../../input/Atividade/Cadastrar-Atividade-Input';
import { HttpRequest } from '../protocolo';



export class CadastrarAtividadeController {
    constructor() { }

    public async handle(httpRequest: HttpRequest<Atividade>): Promise<void> {

        const postAtividadeInput = new CadastrarAtividadeInput(httpRequest)
        const postAtividadeDominio = new CadastrarAtividadeDominio()
        postAtividadeDominio.handle(postAtividadeInput);
        const postAtividadeOutput = new PostAtividadeOutput(postAtividadeInput);
        return postAtividadeOutput.retorno
    }
}