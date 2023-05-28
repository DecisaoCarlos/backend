import { IGetatividade } from './../protocolo';
import { GetAtividadeInput } from "../../input/Get-atividadeinput";
import { Atividade } from "src/framework/sequelize/atividade";
import { ok, serverError } from "../helpers";
import { GetAtividadeDominio } from "../../../dominio/atividade/Get-Atividadedominio";
import { GetAtividadeOutput } from "../../output/Get-atividadeoutput";
import { HttpRequest } from "../protocolo";

export class GetAtividadeControle {
  constructor(private httpRequest: HttpRequest<IGetatividade>, private res: res) { }


  async handle(): Promise<void> {
    const getatividadevalida = new GetAtividadeInput();
    const getAtividadeOutput = new GetAtividadeOutput();
    const getAtividadeDominio = new GetAtividadeDominio()

    //input validar dados de entrada da requisição     
    const isvalid = getatividadevalida.validabody(this.httpRequest);

    // chama output para devolver requisição ruim
    if (isvalid == false) { 
      const { body, statusCode } = serverError();
      getAtividadeOutput.output(this.res, body, statusCode);
      return
    }

    //dominio/casos de uso>repositorio>>banco
    const atividades = await getAtividadeDominio.handle();
    const { body, statusCode } = ok<Atividade[]>(atividades);

    //chama output com os dados para tratar saida
    getAtividadeOutput.output(this.res, body, statusCode);
  }
}
