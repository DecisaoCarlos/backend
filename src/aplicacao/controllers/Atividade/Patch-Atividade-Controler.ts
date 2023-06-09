import { HttpRequest, IPatchatividade } from '../protocolo';
import { PatchAtividadeInput } from "../../input/Atividade/Patch-Atividade-Input"
import { PatchAtividadeOutput } from "../../output/Atividade/Patch-Atividade-Output"
import { PatchAtividadeDominio } from '../../../dominio/Patch-Atividade /Patch-Atividade-Dominio';


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
