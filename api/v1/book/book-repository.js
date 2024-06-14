const bookModel = require('./book-model');
const {Op} = require('sequelize');
const Author = require('../author/author-model');

const save = async (book) => {
    return bookModel.create(book);
};

const findAll = async (filter) => {
    const {title, author} = filter;

    return bookModel.findAll({
        include: [{
            model: Author,
            required: true //inner
        }],
        where: {
            ...(title) ? {title: {[Op.iLike]: `${title}%`}} : {},
            ...(author) ? {author: {[Op.iLike]:`${author.name}`}}: {}
        }
    });
};

const findById = async (id) => {
    return bookModel.findOne({
        include: [ {
            model: Author,
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