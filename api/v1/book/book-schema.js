const Joi = require("joi");

const createBooksSchema = {
    payload: Joi.object({
        title: Joi.string()                
                .required(),
        authorId: Joi.string()
                    .required(),
        publishedDate: Joi.string()
                    .required(),
        isbn: Joi.string()
                .required(),
        summary: Joi.string()
                    .required(),        
    })
};

const getById = {
    params: Joi.object({
        id: Joi.string()
            .required()
    })
};

const getBooks = {
    query: Joi.object({
        title: Joi.string(),
        author: Joi.object({
            name:  Joi.string()
        })
    })
};

module.exports = {
    createBooksSchema, 
    getById,
    getBooks
};