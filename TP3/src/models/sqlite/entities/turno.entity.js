const { DataTypes } = require('sequelize');
const {sequelize} = require('./../config/db.js');
const {Paciente} = require('./paciente.entity.js')

const Turno = sequelize.define('Turno',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_paciente:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    //YYYY-MM-DD HH:MM:SS este es el formato para los horarios
    horario:{
        type: DataTypes.STRING,
        allowNull: false
    }
})

Turno.createTurno = async function (id_paciente, horario) {
    try{
        const pacient = await Paciente.findByPk(id_paciente)
        if(!pacient){
            throw new Error('Error: no existe un usuario con este id')
        }
        const turn = await Turno.create({id_paciente, horario})
        return turn
    }catch(error){
        throw error
    }
}

Turno.deleteTurno = async function (id) {
    try{
        const turn = await Turno.findByPk(id)
        if(!turn){
            throw new Error('Error: no existe un usuario con este id')
        }
        return await turn.destroy()
    }catch(error){
        throw error
    }
    
}

Turno.listTurnos = async function () {
  try{
    const turnos = await Turno.findAll({attributes: ['id', 'id_paciente', 'horario']})
    return turnos.map(turn => turn.get({plain:true}))
  }catch(error){
    throw error
  }
}

module.exports = {Turno}