import { PostAtividadeOutput } from '../../output/Atividade/Cadastrar-Atividade-Output';
import { PostAtividadeDominio } from '../../../dominio/Atividade/Cadastrar-Atividade-Dominio';
import { PostAtividadeInput } from '../../input/Atividade/Cadastrar-Atividade-Input';
import { HttpRequest } from '../protocolo';
import { Atividade } from "src/framework/sequelize/atividade";


export class PostAtividadeController {
    constructor() { }

    public async handle(httpRequest: HttpRequest<Atividade>): Promise<void> {

        const postAtividadeInput = new PostAtividadeInput(httpRequest)
        const postAtividadeDominio = new PostAtividadeDominio()
        postAtividadeDominio.handle(postAtividadeInput);
//        const postAtividadeOutput = new PostAtividadeOutput();

        return
    }
}