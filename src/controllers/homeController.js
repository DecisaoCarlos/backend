
const Atividade = require('../models/atividade');
const Sequelize = require('sequelize');

exports.paginaInicial = (req, res) => {  
  (async () => {              
    const result = await Atividade.findAll({
      order:[
        [ 'createdAt', 'DESC'],
      ],
      where: {
        concluido: false
      }
    });
      res.json( { atividades: result });   
  })();

};

