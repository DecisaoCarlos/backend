import { Response, Request, Router } from 'express'
import { PostAtividadeController } from '../../aplicacao/controllers/Atividade/Post-Atividade-Controler';
import { GetAtividadeControle } from '../../aplicacao/controllers/Atividade/Get-Atividade-Controler';
import { PatchAtividadeControle } from '../../aplicacao/controllers/Atividade/Patch-Atividade-Controler';
import { DeleteAtividadeController } from '../../aplicacao/controllers/Atividade/Delete-Atividade-Controler';
import { validaErro } from '../../aplicacao/controllers/helpers';
import { HttpStatusCode } from '../../aplicacao/controllers/protocolo';

const route = Router();
// Rotas
route.post('/atividade/listar-atividade', async (req: Request, res: Response) => {
    try {
        const getAtividadesController = new GetAtividadeControle();
        const atividades = await getAtividadesController.handle({ body: req.body, });
        res.status(HttpStatusCode.OK).send(atividades);

    } catch (error) {
        const retorno = validaErro(error)
        res.status(retorno.codigo).send(retorno.descricao);
    }
});

route.post('/atividade/cadastrar', async (req: Request, res: Response) => {
    try {
        const postAtividadesController = new PostAtividadeController();
        postAtividadesController.handle({ body: req.body });
        res.status(HttpStatusCode.CREATED).send('Sucesso');
    } catch (error) {
        const retorno = validaErro(error)
        res.status(retorno.codigo).send(retorno.descricao);
    }
});


route.patch('/atividade/atualizar-atividade', async (req: Request, res: Response) => {
    try {
        const patchAtividadesController = new PatchAtividadeControle();
        patchAtividadesController.handle({ body: req.body });
    } catch (error) {
        const retorno = validaErro(error)
        res.status(retorno.codigo).send(retorno.descricao);
    }
});

route.delete('/atividade/deletar/:iddel', async (req: Request, res: Response) => {
    try {
        const deleteAtividadeController = new DeleteAtividadeController();
        deleteAtividadeController.handle({ body: req.params });
    } catch (error) {
        const retorno = validaErro(error)
        res.status(retorno.codigo).send(retorno.descricao);
    }
});

module.exports = route;


