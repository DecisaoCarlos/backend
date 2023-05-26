import { GetAtividadeInput } from "../../input/Get-atividadeinput";
import { Atividade } from "src/framework/sequelize/atividade";
import { ok, serverError } from "../helpers";
import { GetAtividadeDominio } from "../../../dominio/atividade/Get-Atividadedominio";
import { GetAtividadeOutput } from "../../output/Get-atividadeoutput";

export class GetAtividadeControle {
  constructor(private req: req, private res: res) { }


  async handle(): void {

    //input validar dados de entrada da requisição 
    const getatividadevalida = new GetAtividadeInput();
    const isvalid = getatividadevalida.validabody(this.req);
    //output 
    const getAtividadeOutput = new GetAtividadeOutput();

    if (isvalid == false) {
      const { body, statusCode } = serverError();
      getAtividadeOutput.output(this.res, body, statusCode);
      return
    }
    //dominio/casos de uso>repositorio>>banco
    const getAtividadeDominio = new GetAtividadeDominio()
    const atividades = await getAtividadeDominio.handle();
    const { body, statusCode } = ok<Atividade[]>(atividades);

    getAtividadeOutput.output(this.res, body, statusCode);

  }
}
