const Joi = require('joi')

const resenaSchema = {
    create: Joi.object({
        id_libro: Joi.number().integer().required(),
        resena: Joi.string().required()
    }),
    update: Joi.object({
        id_libro: Joi.number().integer().required(),
        resena: Joi.string().required()
    })
}

module.exports = { resenaSchema }