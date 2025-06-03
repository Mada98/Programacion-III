const Joi = require('joi')

const turnoSchema = {
    create: Joi.object({
        id_paciente: Joi.number().integer().positive().required(),
        horario: Joi.string().pattern(/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])\s(0\d|1\d|2[0-3]):[0-5]\d:[0-5]\d$/).required()
        //YYYY-MM-DD HH-MM-SS / Año-Mes-Dia Hora-Minuntos-Segundos
    })
}

module.exports = {turnoSchema}