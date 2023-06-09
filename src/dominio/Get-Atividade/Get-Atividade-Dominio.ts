import { HttpRequest, IGetatividade } from '../../aplicacao/controllers/protocolo';
import { Atividade } from "src/framework/sequelize/atividade";
import { GetAtividadeRepositorio } from "../../core/repositorios/Get-Atividade";

export class GetAtividadeDominio {

  constructor() { }

  public async handle(IGetatividade: IGetatividade): Promise<Atividade[]> {

    const sequelizeGetAtividadeRepositorio = new GetAtividadeRepositorio();
    return await sequelizeGetAtividadeRepositorio.getAtividades(IGetatividade);
  }
}
