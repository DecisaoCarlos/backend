import { Atividade } from './../../../framework/sequelize/atividade';
import { HttpRequest, HttpResponse } from './../protocolo';
import { PatchAtividadeInput } from "../../input/Patch-Atividade/Patch-Atividade-Input"
import { PatchAtividadeOutput } from "../../output/Patch-Atividade/Patch-Atividade-Output"
import { PatchAtividadeDominio } from '../../../dominio/Patch-Atividade /Patch-Atividade-Dominio';
import { ok } from '../helpers';


export class PatchAtividadeControle {
  constructor(private httpRequest: HttpRequest<B>, private HttpResponse: HttpResponse<string>) { }


  async handle(): Promise<void> {
    try {

      const patchatividadevalida = new PatchAtividadeInput();
      const patchAtividadeOutput = new PatchAtividadeOutput();
      const patchAtividadeDominio = new PatchAtividadeDominio()
      //input validar dados de entrada da requisição     
      patchatividadevalida.validabody(this.httpRequest, this.HttpResponse);

      //dominio/casos de uso>repositorio>>banco
 
      const atividades = await patchAtividadeDominio.handle(this.httpRequest.body);
      const { body, statusCode } = ok<Atividade[]>(atividades);

      //chama output com os dados para tratar saida
      patchAtividadeOutput.output(this.HttpResponse, body, statusCode);
    }
    catch (error) {
      return
    }

  }
}
