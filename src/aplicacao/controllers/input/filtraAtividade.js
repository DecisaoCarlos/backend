const buscaNoBanco = require('../../../core/repositorios/buscarAtividade');
const output = require('../output/retornaAtividade');

exports.filtrar = async (req, res) => {
  let isConcluido = req.body.estadoDaAtividade;
  if (!!isConcluido) {res.json( {mensagem: 'Filtro inválido'} )};  
 
  const result = await buscaNoBanco.buscar(isConcluido);           
  output.retorna(result,res)
}
