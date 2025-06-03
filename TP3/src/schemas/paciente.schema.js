const Joi = require('joi')

const pacienteSchema = {
    create: Joi.object({
        nombre: Joi.string().required(),
        apellido: Joi.string().required(),
        email: Joi.string().email().required(),
        contraseña: Joi.string().min(8).required()
    }),
    update: Joi.object({
        nombre: Joi.string().required(),
        apellido: Joi.string().required(),
        email: Joi.string().email().required(),
        contraseña: Joi.string().min(8).required()
    }),
    login: Joi.object({
        email: Joi.string().email().required(),
        contraseña: Joi.string().min(8).required()
    })
}

module.exports = {pacienteSchema}