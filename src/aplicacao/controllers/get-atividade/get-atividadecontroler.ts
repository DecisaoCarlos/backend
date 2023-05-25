import { Atividade } from "src/framework/sequelize/atividade";
import { ok, serverError } from "../helpers";
import { HttpResponse } from "src/aplicacao/controllers/protocolo";
import { SequelizeGetAtividadeRepositorio } from "src/core/repositorios/buscarAtividade";

export class GetAtividadeControle  {
  constructor(private readonly getAtividadeRepositorio: SequelizeGetAtividadeRepositorio) {}

  async handle(): Promise<HttpResponse<Atividade[] | string>> {
    try {
      const atividades = await this.getAtividadeRepositorio.getAtividades();

      return ok<Atividade[]>(atividades);
    } catch (error) {
      return serverError();
    }
  }
}
