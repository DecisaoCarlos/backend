import { IGetatividade, HttpResponse } from '../protocolo';
import { GetAtividadeInput } from "../../input/Get-Atividade/Get-Atividade-Input";
import { Atividade } from "src/framework/sequelize/atividade";
import { ok, serverError } from "../helpers";
import { GetAtividadeDominio } from "../../../dominio/Get-Atividade/Get-Atividade-Dominio";
import { GetAtividadeOutput } from "../../output/Get-Atividade/Get-Atividade-Output";
import { HttpRequest } from "../protocolo";

export class GetAtividadeControle {
  constructor(private httpRequest: HttpRequest<B>, private HttpResponse: HttpResponse<string>) { }


  async handle(): Promise<void> {
    try {
      const getatividadevalida = new GetAtividadeInput();
      const getAtividadeOutput = new GetAtividadeOutput();
      const getAtividadeDominio = new GetAtividadeDominio()

      //input validar dados de entrada da requisição     
      getatividadevalida.validabody(this.httpRequest, this.HttpResponse);

      //dominio/casos de uso>repositorio>>banco
      const atividades = await getAtividadeDominio.handle(this.httpRequest.body);
      const { body, statusCode } = ok<Atividade[]>(atividades);

      //chama output com os dados para tratar saida
      getAtividadeOutput.output(this.HttpResponse, body, statusCode);
    }
    catch (error) {
      return
    }

  }
}
