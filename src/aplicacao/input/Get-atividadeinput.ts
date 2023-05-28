import { HttpRequest, IGetatividade } from './../controllers/protocolo';
export class GetAtividadeInput {
    validabody(request: HttpRequest<IGetatividade>):boolean {
        const requiredFields = ["estadoDaAtividade"];
        if (requiredFields  in request.body ) {                                 
            if (request.body != null && request.body !== undefined) {
                if (request.body.estadoDaAtividade === true || request.body.estadoDaAtividade === false) {
                    return true // se chegou aqui está correto
                }                
            }            
        }
        return false
    }

}