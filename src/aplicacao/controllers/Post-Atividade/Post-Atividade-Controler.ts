import { response } from 'express';
import { PostAtividadeOutput } from '../../output/Post-Atividade/Post-Atividade-Output';
import { PostAtividadeDominio } from '../../../dominio/Post-Atividade/Post-Atividade-Dominio';
import { PostAtividadeInput } from '../../input/Post-Atividade/Post-Atividade-Input';
import { created} from '../helpers';
import { HttpRequest, HttpResponse } from '../protocolo';
import { Atividade } from "src/framework/sequelize/atividade";


export class PostAtividadeController {
    constructor(private httpRequest: HttpRequest<Atividade>, private HttpResponse: HttpResponse<string>) { }

    async handle(): Promise<void> {
        try {
            const postAtividadeInput = new PostAtividadeInput()
            const postAtividadeDominio = new PostAtividadeDominio()
            const postAtividadeOutput = new PostAtividadeOutput();
            //input validar dados de entrada da requisição  
            postAtividadeInput.validabody(this.httpRequest, this.HttpResponse);

            //dominio/casos de uso>repositorio>>banco            
            postAtividadeDominio.handle(this.httpRequest.body);

             //chama output com os dados para tratar saida             
             const { body, statusCode } = created<Atividade>('sucesso')             
             postAtividadeOutput.output(this.HttpResponse, body, statusCode);

        } catch (error) {
            return
        }
    }
}