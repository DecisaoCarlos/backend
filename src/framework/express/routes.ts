import { Response, Request, Router } from 'express'
import { CadastrarAtividadeController } from '../../aplicacao/controllers/Atividade/Cadastrar-Atividade-Controler';
import { BuscarAtividadeControle } from '../../aplicacao/controllers/Atividade/Buscar-Atividade-Controler';
import { AtualizarAtividadeControle } from '../../aplicacao/controllers/Atividade/Atualizar-Atividade-Controler';
import { DeleteAtividadeController } from '../../aplicacao/controllers/Atividade/Deletar-Atividade-Controler';
import { validaErro } from '../../aplicacao/controllers/helpers';
import { HttpStatusCode } from '../../aplicacao/controllers/protocolo';

const route = Router();

route.post('/atividade/listar-atividade', async (req: Request, res: Response) => {
    try {
        const getAtividadesController = new BuscarAtividadeControle();
        const atividades = await getAtividadesController.handle({ body: req.body, });
        res.status(HttpStatusCode.OK).send(atividades);
    } catch (error) {
        const retorno = validaErro(error)
        res.status(retorno.codigo).send(retorno.descricao);
    }
});

route.post('/atividade/cadastrar', async (req: Request, res: Response) => {
    try {
        const postAtividadesController = new CadastrarAtividadeController();
        const output = await postAtividadesController.handle({ body: req.body });
        res.status(HttpStatusCode.CREATED).send(output);
    } catch (error) {
        const retorno = validaErro(error)
        res.status(retorno.codigo).send(retorno.descricao);
    }
});


route.patch('/atividade/atualizar-atividade', async (req: Request, res: Response) => {
    try {
        const patchAtividadesController = new AtualizarAtividadeControle();
        const output = await patchAtividadesController.handle({ body: req.body });
        res.status(HttpStatusCode.OK).send(output);
    } catch (error) {
        const retorno = validaErro(error)
        res.status(retorno.codigo).send(retorno.descricao);
    }
});

route.delete('/atividade/deletar/:iddel', async (req: Request, res: Response) => {
    try {
        const deleteAtividadeController = new DeleteAtividadeController();
        const id = parseInt(req?.params?.id)
        const output = await deleteAtividadeController.handle(id);
        res.status(HttpStatusCode.OK).send(output);
    } catch (error) {
        const retorno = validaErro(error)
        res.status(retorno.codigo).send(retorno.descricao);
    }
});

module.exports = route;


