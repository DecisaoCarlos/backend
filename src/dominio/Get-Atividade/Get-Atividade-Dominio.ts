import { HttpRequest, IGetatividade } from '../../aplicacao/controllers/protocolo';
import { Atividade } from "src/framework/sequelize/atividade";
import { GetAtividadeRepositorio } from "../../core/repositorios/Get-Atividade";

export class GetAtividadeDominio {

  constructor() { }

  async handle(IGetatividade: IGetatividade): Promise<Atividade[]>{

      const sequelizeGetAtividadeRepositorio = new GetAtividadeRepositorio();
      const atividades = await sequelizeGetAtividadeRepositorio.getAtividades(IGetatividade);
      return atividades
  }
}
