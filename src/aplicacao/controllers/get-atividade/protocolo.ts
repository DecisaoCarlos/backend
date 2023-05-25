import { Atividade } from '../../../../../frontend-estruturado/src/app/shared/model/Atividade';

export interface IGetAtividadeRepositorio {
  getUsers(): Promise<Atividade[]>;
}
