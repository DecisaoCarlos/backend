import { HttpRequest, IPatchatividade } from '../../controllers/protocolo';

export class PatchAtividadeInput {
    public estadoDaAtividade: boolean | undefined;
    public descricao: string = '';
    public id: number = 0;

    constructor(httpBody: HttpRequest<IPatchatividade>) {
        const requiredFields = ["estadoDaAtividade", "id", "descricao"];

        for (let campo of requiredFields) {
            if (httpBody.body != null && httpBody.body !== undefined) {
                if (campo in httpBody.body) {
                    if (httpBody.body.estadoDaAtividade != null && httpBody.body.estadoDaAtividade !== undefined ) {
                       // if (httpBody.body.descricao != null && httpBody.body.descricao !== undefined) {
                            if (httpBody.body.id != null && httpBody.body.id !== undefined ) {
                                this.estadoDaAtividade = httpBody.body?.estadoDaAtividade
                                this.id = httpBody.body?.id
                             //   this.descricao = httpBody.body?.descricao
                                return
                          //  }
                        }
                        throw new Error("Campo Id não pode ser vazio");
                    }
                    throw new Error("Campo estadoDaAtividade não pode ser vazio");
                }
                throw new Error("Campo " + campo + " não encontrato");
            }
            throw new Error("Json inválido");
        }
    }

}