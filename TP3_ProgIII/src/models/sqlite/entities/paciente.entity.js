const { DataTypes } = require('sequelize');
const {sequelize} = require('./../config/db.js');

const Paciente = sequelize.define('Paciente', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre:{ 
    type: DataTypes.STRING,
    allowNull: false
  },
  apellido:{
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

Paciente.createPaciente = async function (nombre, apellido, email) {
  try {
    const pacient = await Paciente.create({nombre, apellido, email});
    return pacient
  }catch (error){
    throw error;
  }
}
Paciente.updatePaciente = async function (id, nombre, apellido, email) {
  try{
    const pacient = await Paciente.findByPk(id)
    if(!pacient){
      throw new error('Error: no existe un paciente con este id')
    }
    return await pacient.update({nombre, apellido, email})
  }catch(error){
    throw error
  }
}
Paciente.deletePaciente = async function (id) {
  try{
    const pacient = await Paciente.findByPk(id)
    if(!pacient){
      throw new error('Error: no existe un paciente con este id')
    }
    return await pacient.destroy()
  }catch(error){
    throw error
  }
}
Paciente.listPacientes = async function () {
  try{
    const pacients = await Paciente.findAll()
    return pacients.map(pacient => `${pacient.nombre},${pacient.apellido}, ${pacient.email}`)
  }catch(error){
    throw error
  }
}

module.exports = {Paciente};