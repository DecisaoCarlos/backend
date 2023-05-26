import { SequelizeGetAtividadeRepositorio } from "../../core/repositorios/buscarAtividade";

export class GetAtividadeDominio {

  constructor() { }

  async handle(): atividades {
    try {
      const sequelizeGetAtividadeRepositorio = new SequelizeGetAtividadeRepositorio();
      const atividades = await sequelizeGetAtividadeRepositorio.getAtividades();
      return atividades

    } catch (error) {
      return error
    }
  }
}
