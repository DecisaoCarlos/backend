import { Atividade } from "src/framework/sequelize/atividade";
import { SequelizeGetAtividadeRepositorio } from "../../core/repositorios/buscarAtividade";

export class GetAtividadeDominio {

  constructor() { }

  async handle(): Promise<Atividade[]>{
      const sequelizeGetAtividadeRepositorio = new SequelizeGetAtividadeRepositorio();
      const atividades = await sequelizeGetAtividadeRepositorio.getAtividades();
      return atividades
  }
}
