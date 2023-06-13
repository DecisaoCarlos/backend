import {IGetatividade } from '../../aplicacao/controllers/protocolo';
import { Atividade } from "../Models/Atividade";
import { BuscarAtividadeRepositorio } from "../../core/repositorios/Atividade";

export class BuscarAtividadeDominio {

  constructor() { }

  public async handle(IGetatividade: IGetatividade): Promise<Atividade[]> {

    const sequelizeGetAtividadeRepositorio = new BuscarAtividadeRepositorio();
    return await sequelizeGetAtividadeRepositorio.getAtividades(IGetatividade);
  }
}
