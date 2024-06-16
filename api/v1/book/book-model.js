const Sequelize = require('sequelize');
const database = require('../../../config/db');
const Author = require('../author/author-model');

const Book = database.sequelize.define('Book', {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
        field: 'id'
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'title'
    },
    authorId: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        field: 'authorId',
        references: {
            model: 'tb_author',
            key: 'id'
        }
    },
    publishedDate: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'publishedDate'
    },
    isbn: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'isbn'
    },
    summary: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'summary'
    },    
}, {
    timestamps: false,
    tableName: 'tb_book'
});

Book.belongsTo(Author, {foreignKey: 'authorId', as: 'author' });
Author.hasMany(Book, { foreignKey: 'authorId', as: 'books' });

module.exports = Book;