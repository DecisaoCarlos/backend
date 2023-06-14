import { IGetatividade } from '../protocolo';
import { BuscarAtividadeInput } from "../../input/Atividade/Buscar-Atividade-Input";
import { Atividade } from '../../../dominio/Models/Atividade'
import { BuscarAtividadeDominio } from "../../../dominio/Atividade/Buscar-Atividade-Dominio";
import { BuscarAtividadeOutput } from "../../output/Atividade/Buscar-Atividade-Output";
import { HttpRequest } from "../protocolo";

export class BuscarAtividadeControle {
  constructor() { }


  public async handle(httpRequest: HttpRequest<IGetatividade>): Promise<Atividade[]> {

    const getatividadeinput = new BuscarAtividadeInput(httpRequest);
    const getAtividadeDominio = new BuscarAtividadeDominio()
    const atividades = await getAtividadeDominio.handle(getatividadeinput);
    const getatividadeoutput = new BuscarAtividadeOutput(atividades);
    return getatividadeoutput.atividades

  }
}
