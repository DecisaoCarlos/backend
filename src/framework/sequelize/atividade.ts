var Sequelize = require('sequelize');
const database = require('../../core/repositorios/db');
import { DATE } from "sequelize";

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

export interface Atividade {
    /**
     * Identificador da atividade
     */
    id?: number
    /**
     * Descrição da atividade
     */
    descricao: string
    concluido: boolean
    createdAt: Date
    updatedAt: Date
}

module.exports = Atividade;