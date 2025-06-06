const { Paciente } = require('./../../models/sqlite/entities/paciente.entity')

exports.login = async (req, res) => {
    const { email, contraseña } = req.body
    const token = await Paciente.validate(email, contraseña)
    console.log(token)
    if (token) {
        res.status(200).json(token)
    }else {
        res.status(401).json({message: 'Error de password o email'})
    }
}

exports.getAllPacientes = async (req, res) => {
    try{
        const pacientes = await Paciente.findAll()
        res.status(200).json(pacientes)
    }catch(error){
        res.status(500).json({message: 'Error al obtener los datos de los Pacientes'})
    }
}

exports.createPaciente = async (req, res) => {
    try{
        const {nombre, apellido, email, contraseña} = req.body
        const pacient = await Paciente.createPaciente(nombre, apellido, email, contraseña)
        res.status(201).json(pacient)
    }catch(error){
        res.status(400).json({message: 'Error al crear un paciente nuevo'})
    }
}

exports.updatePaciente = async (req, res) => {
    try{
        const {nombre, apellido, email, contraseña} = req.body
        const pacient = await Paciente.updatePaciente(req.params.id, nombre, apellido, email, contraseña)
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
        res.status(201).json({message: 'Paciente eliminado con exito'})
    }catch(error){
        if(error.message === 'Error: no existe un paciente con este id'){
            return res.status(404).json({message: 'Paciente no encontrado'})
        }
        res.status(500).json({message: error.message})
    }
}

exports.listPacientesRender = async (req, res) => {
    try{
        const pacientes = await Paciente.listPacientes()
        res.render('pacientes/index', { pacientes })
    }catch(error){
        res.status(500).json({message: 'Error al obtener los datos de los Pacientes'})
    }
}