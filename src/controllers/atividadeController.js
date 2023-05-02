const Atividade = require('../models/atividade');
const Sequelize = require('sequelize');


exports.buscar = (req, res) => {
  let pag = req.params.status;  
  let ordena = 'updatedAt';
  if(pag == 'false'){
    ordena = 'createdAt';
  }    
  (async () => {              
    const result = await Atividade.findAll({
      order:[
        [ ordena, 'DESC'],
      ],
      where: {
        concluido: pag
      }
    });      
      res.json(   result );      
  })();
}

exports.register = async(req, res) => {
  //cadu
  console.log('cadu');
  let descricao = req.body.descricao;
  let id = req.body.id; // if para saber se será create ou alter
  if(id){    
    const atividade = await Atividade.findByPk(id);
    if (atividade){
      atividade.descricao = descricao;
      const resultadoSave = await atividade.save(); 
    } 
  } else {
    const today = new Date();  
    const resultadoCreate = await Atividade.create({
      descricao: descricao,
      concluido: false,
    })
  }
  res.json('');
}; //falta preencher o retorno melhor



exports.deletar = async(req, res) => {
  let id = req.params.iddel;
  let pag = req.params.statusdel;
  await Atividade.destroy({ where: { id: id }});
  let ordena = 'updatedAt';
  if(pag == 'false'){    
    ordena = 'createdAt';
  }    
  const lista = await Atividade.findAll({
    order:[
      [ ordena, 'DESC'],
    ],
    where: {
      concluido: pag
    }
  });           
  res.json(  lista );  
};

exports.concluir = async function(req, res) {  
  if(!req.params.id) return res.render('404');
    const id = req.params.id   
    let status = req.params.status
    let concluido = false
    let ordena = 'updatedAt';
    if(status == 'false'){
      concluido = true
      ordena = 'createdAt';
    }    
    const atividade = await Atividade.findByPk(id);
    atividade.concluido = concluido;
    const resultadoSave = await atividade.save();  
    const lista = await Atividade.findAll({
      order:[
        [ ordena, 'DESC'],
      ],
      where: {
        concluido: status
      }
    });  
    res.json(  lista );      
};