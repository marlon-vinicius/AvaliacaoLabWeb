const Sequelize = require('sequelize');
const database = require('../../../config/db');

const Author = database.sequelize.define('Author', {
    id: {
        type: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
        field: 'id' //nome do atributo do banco
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'name'
    },
    biography: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'biography'
    },
    birthDate: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'birthDate'
    }
}, {
    timestamps: false,
    tableName: 'tb_author' //nome da tabela banco
});

module.exports = Author;