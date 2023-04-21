const Atividade = require('../models/atividade');
const Sequelize = require('sequelize');
exports.start = (req, res) => {
  res.render('inserir', {
    body: {}
  });
};



exports.register = async(req, res) => {
  console.log(req.body);
  const today = new Date();  
  const resultadoCreate = await Atividade.create({
    descricao: req.body.atividade,
    concluido: false,
})
  res.render('inserir');
};

exports.concluida = async(req, res) => {
  (async () => {        
    const lista = await Atividade.findAll({
      order:[
        [ 'updatedAt', 'DESC'],
      ],
      where: {
        concluido: true
      }
    });        //rota para atividades concluida busca apenas atividades concluida
    res.json( lista );  
  })();
};

exports.deletar = async(req, res) => {
  let id = req.params.iddel;
  let pag = req.params.statusdel;
  await Atividade.destroy({ where: { id: id }});
  const lista = await Atividade.findAll({
    where: {
      concluido: pag
    }
  });  
  if (pag == 'false') {           //esse if é para saber se está na pagina de pendente ou concluidas assim manterá na mesma pagina    
    if (lista != null) {
      res.json(  lista );  
    }
  }
  else {
    (async () => {              
      if (lista != null) {
        res.json(  lista );  
      }; 
    })();
  }
};

exports.concluir = async function(req, res) {  
  if(!req.params.id) return res.render('404');
    const id = req.params.id
    let concluido = false
    let status = req.params.status
    if(status == 'false'){
      concluido = true
    }
    const atividade = await Atividade.findByPk(id);
    atividade.concluido = concluido;
    const resultadoSave = await atividade.save();  
    const lista = await Atividade.findAll({
      where: {
        concluido: status
      }
    });  
    if (concluido == true) {   // if semelhante ao da rota de exclusao , em vez de criar outra rota usei o if para manter na mesma rota                              
      res.json(  lista );  
    }
    else {
      (async () => {
        if (lista != null) {                    
          res.json( lista );  
        }; 
      })();
  }
};