const { Persona } = require('../../models/sqlite/entities/personas.entity')

exports.listaPersona = async (req, res) => {
    try {
        const persona = await Persona.listPersona()
        res.status(200).send(persona)
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los datos de los Pacientes' })
    }
}

exports.createPersona = async (req, res) => {
    try {
        const { nombre, apellido, edad, email } = req.body
        const persona = await Persona.createPersona(nombre, apellido, edad, email)
        res.status(201).json(persona)
    } catch (error) {
        res.status(400).json({ message: 'Error al crear un paciente nuevo' })
    }
}