import { HttpResponse, IGetatividade } from '../protocolo';
import { GetAtividadeInput } from "../../input/Atividade/Buscar-Atividade-Input";
import { Atividade } from "../../../framework/sequelize/atividade";
import { ok } from "../helpers";
import { GetAtividadeDominio } from "../../../dominio/Atividade/Buscar-Atividade-Dominio";
import { GetAtividadeOutput } from "../../output/Atividade/Buscar-Atividade-Output";
import { HttpRequest } from "../protocolo";

export class GetAtividadeControle {
  constructor() { }


  public async handle(httpRequest: HttpRequest<IGetatividade>): Promise<Atividade[] > {

    const getatividadeinput = new GetAtividadeInput(httpRequest);
    const getAtividadeDominio = new GetAtividadeDominio()
    const atividades = await getAtividadeDominio.handle(getatividadeinput);
    const getatividadeoutput = new GetAtividadeOutput(atividades);

  //console.log(getatividadeoutput.patividades)
    return getatividadeoutput.patividades

  }
}
