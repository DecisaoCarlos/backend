import { PostAtividadeOutput } from '../../output/Atividade/Post-Atividade-Output';
import { PostAtividadeDominio } from '../../../dominio/Post-Atividade/Post-Atividade-Dominio';
import { PostAtividadeInput } from '../../input/Atividade/Post-Atividade-Input';
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