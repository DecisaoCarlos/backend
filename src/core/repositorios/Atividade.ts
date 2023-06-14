import { IPatchatividade } from 'src/aplicacao/controllers/protocolo';
import { IGetatividade } from 'src/aplicacao/controllers/protocolo';
import { Atividade } from '../../dominio/Models/Atividade';
import { IPostatividade } from "src/aplicacao/controllers/protocolo";
import { IDeleteatividade } from "src/aplicacao/controllers/protocolo";

const SeqAtividade = require('../../framework/sequelize/atividade');

export class AtualizarAtividadeRepositorio {
    public async AlterarConcluidoAtividade(input: IPatchatividade): Promise<void> {      
        const isconcluido = input.estadoDaAtividade
        let estadoDaAtividade = true
        if (isconcluido === true) {
            estadoDaAtividade = false
        }
        const atividade = await SeqAtividade.findByPk(input?.id);
        if (input.descricao) {
            atividade.descricao = input.descricao;
        } else {
            atividade.concluido = estadoDaAtividade;
        }
        const resultadoSave = await atividade.save();
    }
}


export class BuscarAtividadeRepositorio {
    public async getAtividades(iGetatividade: IGetatividade): Promise<Atividade[]> {
        const isconcluido = iGetatividade.estadoDaAtividade
        let order = 'createdAt'
        if (isconcluido === true) {
            order = 'updatedAt'
        }
        const result = SeqAtividade.findAll({
            order: [
                [order, 'DESC'],
            ],
            where: {
                concluido: isconcluido
            }
        });
        return result
    }
}


export class CadastrarAtividadeRepositorio {
    public async CreateAtividade(atividade: IPostatividade) {
        const resultadoCreate = await SeqAtividade.create({
            descricao: atividade.descricao,
            concluido: false,
        })
    }
}

export class DeleteAtividadeRepositorio {
    public async DeleteAtividade(id: IDeleteatividade) {
        await SeqAtividade.destroy({ where: { id: id.id } });
    }
}