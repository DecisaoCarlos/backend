var Sequelize = require('sequelize');
const database = require('../../core/repositorios/db');
import { DATE } from "sequelize";

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
})

export interface Atividade {
    indexOf(arg0: number): unknown;
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

module.exports = SeqAtividade;