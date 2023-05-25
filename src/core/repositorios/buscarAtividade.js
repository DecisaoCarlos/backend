const Atividade = require('../../framework/sequelize/atividade');
const Sequelize = require('sequelize');
exports.buscar = async (isConcluido) => {
  let ordena = 'updatedAt';
  if(isConcluido == false){
    ordena = 'createdAt';
  }               
  const result = Atividade.findAll({
    order:[
      [ ordena, 'DESC'],
    ],
    where: {
      concluido: isConcluido
    }
  });

  return result     
}
