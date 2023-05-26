export class GetAtividadeInput  {
    validabody(req:Request){   
        if(typeof req.body.estadoDaAtividade !== 'boolean'){ return false }
        return true
    }
    
}