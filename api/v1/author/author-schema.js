const Joi = require("joi");

const createAuthorsSchema = {
    payload: Joi.object({
        name: Joi
                .string()
                .required(),
        biography: Joi
                .string()
                .required(),
        birthDate: Joi
                .string()
                .required()
    })
};

const getById = {
    params: Joi.object({
        id: Joi
            .string()
            .required()
    })
};

const deleteById = {
    params: Joi.object({
        id: Joi
            .string()
            .required()
    })
};

module.exports = {
    createAuthorsSchema, 
    getById,
    deleteById
};