import { response } from 'express';
import { DeleteAtividadeOutput } from '../../output/Delete-Atividade/Delete-Atividade-Output';
import { DeleteAtividadeInput } from '../../input/Delete-Atividade/Delete-Atividade-Input';
import { ok } from '../helpers';
import { HttpRequest, HttpResponse } from '../protocolo';
import { Atividade } from "src/framework/sequelize/atividade";
import { DeleteAtividadeDominio } from '../../../dominio/Delete-Atividade/Delete-Atividade-Dominio';


export class DeleteAtividadeController {
    constructor(private httpRequest: HttpRequest<Atividade>, private HttpResponse: HttpResponse<string>) { }

    public async handle(): Promise<void> {
        try {

            const deleteAtividadeInput = new DeleteAtividadeInput()
            const deleteAtividadeDominio = new DeleteAtividadeDominio()
            const deleteAtividadeOutput = new DeleteAtividadeOutput();
            //input validar dados de entrada da requisição  
            deleteAtividadeInput.validabody(this.httpRequest, this.HttpResponse);

            //dominio/casos de uso>repositorio>>banco            
            deleteAtividadeDominio.handle(this.httpRequest.body);

            //chama output com os dados para tratar saida             
            const { body, statusCode } = ok<Atividade>('sucesso')
            deleteAtividadeOutput.output(this.HttpResponse, body, statusCode);

        } catch (error) {
            return
        }
    }
}