const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');

const Tarefa = sequelize.define('Tarefa', {

    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    
    titulo: {
        type: DataTypes.STRING,
        allowNull: false 
    },

    descricao: {
        type: DataTypes.TEXT,
        allowNull: true
    },

    concluida: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
});

module.exports = Tarefa;