import { Atividade } from './../../../../../frontend-estruturado/src/app/shared/model/Atividade';
import { ok, serverError } from "../helpers";
import { HttpResponse } from "../protocolo";
import { IGetAtividadeRepositorio } from "./protocolo";

export class GetAtividadeControle  {
  constructor(private readonly getAtividadeRepositorio: IGetAtividadeRepositorio) {}

  async handle(): Promise<HttpResponse<Atividade[] | string>> {
    try {
      const atividades = await this.getAtividadeRepositorio.getUsers();

      return ok<Atividade[]>(atividades);
    } catch (error) {
      return serverError();
    }
  }
}
