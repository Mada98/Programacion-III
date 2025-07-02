const Joi = require('joi')

const libroSchema = {
    create: Joi.object({
        nombre: Joi.string().required(),
        autor: Joi.string().required(),
        genero: Joi.string().required(),
        estado: Joi.string().required(),
        rating: Joi.number().required()
    }),
    update: Joi.object({
        estado: Joi.string().required()
    })
}

module.exports = {libroSchema}