const Joi = require("joi");

const createAuthorsSchema = {
    payload: Joi.object({
        name: Joi
                .string()
                .min(3)
                .max(60)
                .required(),
        biography: Joi
                .string()
                .min(3)
                .max(60)
                .required(),
        birthDate: Joi
                .string()
                .min(3)
                .max(60)
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