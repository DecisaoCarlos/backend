import { HttpRequest, IPatchatividade } from '../protocolo';
import { PatchAtividadeInput } from "../../input/Atividade/Atualizar-Atividade-Input"
import { PatchAtividadeOutput } from "../../output/Atividade/Atualizar-Atividade-Output"
import { PatchAtividadeDominio } from '../../../dominio/Atividade/Atualizar-Atividade-Dominio';


export class PatchAtividadeControle {
  constructor() { }


  public async handle(httpBody:HttpRequest<IPatchatividade>): Promise<void> {
    try {

      const patchAtividadeInput = new PatchAtividadeInput(httpBody);         
      const patchAtividadeDominio = new PatchAtividadeDominio()       
       await patchAtividadeDominio.handle(patchAtividadeInput);
    }
    catch (error) {
      return
    }

  }
}
