const bookModel = require('./book-model');
const {Op} = require('sequelize');
const authorModel = require('../author/author-model');

const syncModel = async () => {
    await bookModel.sync({ force: false }); //force: true para recriar a tabela a cada inicialização
};

const save = async (book) => {
    await syncModel();
    return bookModel.create(book);
};

const findAll = async (filter) => {
    const {title, author} = filter;

    return bookModel.findAll({
        include: [{
            model: authorModel,
            required: true, //inner
            as: 'author',
            attributes: ['id', 'name'],
            where: (author) ? {name: {[Op.iLike]: `${author}%`}} : {}    
        }],
        where: (title) ? {title: {[Op.iLike]: `${title}%`}} : {},
    });
};

const findById = async (id) => {
    return bookModel.findOne({
        include: [ {
            model: authorModel,
            required: false //left
        }],
        where: {
            id: id
        }
    })
};

module.exports = {
    save,
    findAll,
    findById
};