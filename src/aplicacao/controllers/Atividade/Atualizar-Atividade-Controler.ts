import { HttpRequest, IPatchatividade } from '../protocolo';
import { AtualizarAtividadeInput } from "../../input/Atividade/Atualizar-Atividade-Input"
import { AtualizarAtividadeOutput } from "../../output/Atividade/Atualizar-Atividade-Output"
import { AtualizarAtividadeDominio } from '../../../dominio/Atividade/Atualizar-Atividade-Dominio';


export class AtualizarAtividadeControle {
  constructor() { }


  public async handle(httpBody: HttpRequest<IPatchatividade>): Promise<void> {
    const patchAtividadeInput = new AtualizarAtividadeInput(httpBody);
    const patchAtividadeDominio = new AtualizarAtividadeDominio()
    await patchAtividadeDominio.handle(patchAtividadeInput);
    const atualizarAtividadeOutput = new AtualizarAtividadeOutput(patchAtividadeInput);
    return atualizarAtividadeOutput.retorno
  }
}
