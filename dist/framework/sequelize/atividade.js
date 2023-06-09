"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sequelize = require('sequelize');
const database = require('../../core/repositorios/db');
const SeqAtividade = database.define('atividade', {
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
});
module.exports = SeqAtividade;
