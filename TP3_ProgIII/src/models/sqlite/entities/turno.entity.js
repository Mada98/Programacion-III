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
    horario:{
        type: DataTypes.DATE,
        allowNull: false
    }
})

//cree esta funcion solo para chequear el get y el delete
//faltaria el jwt, si es q lo vamos a hacer
Turno.createTurno = async function (id_paciente, horario) {
    try{
        const pacient = await Paciente.findByPk(id_paciente)
        if(!pacient){
            throw new error('Error: no existe un usuario con este id')
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
            throw new error('Error: no existe un usuario con este id')
        }
        return await turn.destroy()
    }catch(error){
        throw error
    }
    
}

module.exports = {Turno}