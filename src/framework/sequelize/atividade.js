const Sequelize = require('sequelize');
const database = require('../../core/repositorios/db');

const Atividade = database.define('atividade', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    descricao: {
        type: Sequelize.STRING,
        allowNull: false
    },
    concluido: {
        type: Sequelize.BOOLEAN,
        allowNull: false          
    },
    descricao: Sequelize.STRING
})

module.exports = Atividade;