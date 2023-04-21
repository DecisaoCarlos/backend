
const Atividade = require('../models/atividade');
const Sequelize = require('sequelize');

exports.paginaInicial = (req, res) => {
  let pag = req.params.status;  
  (async () => {              
    const result = await Atividade.findAll({
      order:[
        [ 'createdAt', 'DESC'],
      ],
      where: {
        concluido: pag
      }
    });      
      res.json(   result );      
  })();

};

