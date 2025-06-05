const { Paciente } = require('../../models/sqlite/entities/paciente.entity');
const { Turno } = require('../../models/sqlite/entities/turno.entity')

exports.getAllTurnos = async (req, res) => {
    try{
        const turnos = await Turno.findAll()
        res.status(200).json(turnos)
    }catch(error){
        res.status(500).json({message: error.message})
    }
}

exports.getTurnoByIdPaciente = async (req, res) => {
    try{
        const turno = await Turno.findAll({where: {id_paciente: req.params.id}})
        if(!turno){
            return res.status(404).json({message: 'Error: no existe un paciente con este ID'})
        }
        res.status(200).json(turno)
    }catch(error){
        res.status(500).json({message: error.message})
    }
}

exports.createTurno = async (req, res) => {
    try{
        const {id_paciente, horario} = req.body
        const turno = await Turno.createTurno(id_paciente, horario)
        res.status(201).json(turno)
    }catch(error){
        if(error.message === 'Error: no existe un paciente con este id')
            return res.status(404).json({message: error.message})
        res.status(400).json({message: error.message})
    }
}

exports.deleteTurno = async (req, res) => {
    try{
        await Turno.deleteTurno(req.params.id)
        res.status(201).json({message: 'Turno eliminado con exito'})
    }catch(error){
        if(error.message === 'Error: no existe un turno con este id'){
            return res.status(404).json({message: error.message})
        }
        res.status(500).json({message: error.message})
    }
}

exports.listaDeTurnosRender = async (req, res) => {
    try{
        const turnos = await Turno.listTurnos()
        res.render('turnos/index', { turnos })
    }catch(error){
        res.status(500).json({message: 'Error al obtener los datos de los Pacientes'})
    }
}