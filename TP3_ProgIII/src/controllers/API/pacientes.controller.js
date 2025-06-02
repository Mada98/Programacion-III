const { Paciente } = require('./../../models/sqlite/entities/paciente.entity')

exports.getAllPacientes = async (req, res) => {
    try{
        const pacientes = await Paciente.findAll()
        res.status(200).json(pacientes)
    }catch(error){
        res.status(500).json({message: error.message})
    }
}
exports.createPaciente = async (req, res) => {
    try{
        const {nombre, apellido, email} = req.body
        const pacient = await Paciente.createPaciente(nombre, apellido, email)
        res.status(201).json(pacient)
    }catch(error){
        res.status(400).json({message: error.message})
    }
}
exports.updatePaciente = async (req, res) => {
    try{
        const {nombre, apellido, email} = req.body
        const pacient = await Paciente.updatePaciente(req.params.id, nombre, apellido, email)
        res.status(200).json(pacient)
    }catch(error){
        if (error.message === 'Error: no existe un paciente con este id') {
            return res.status(404).json({message: 'Cliente no encontrado'})
        }
        res.status(400).json({message: error.message})
    }
}
exports.deletePaciente = async (req, res) => {
    try{
        await Paciente.deletePaciente(req.params.id)
        res.status(204).json({message: 'Paciente eliminado'})
    }catch(error){
        if(error.message === 'Error: no existe un paciente con este id'){
            return res.status(404).json({message: 'Cliente no encontrado'})
        }
        res.status(500).json({message: error.message})
    }
}