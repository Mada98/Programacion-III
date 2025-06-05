const { DataTypes } = require('sequelize');
const {sequelize} = require('./../config/db.js');
const jwt = require('jsonwebtoken')

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
  },
  contraseña: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

Paciente.validate = async function (email, contraseña) {
  try{
    const pacienteFound = await Paciente.findByEmail(email)
    
    if (!pacienteFound || !pacienteFound.contraseña){
      throw new Error('Contraseña o Email incorrecto')
    }

    if (pacienteFound.contraseña !== contraseña) {
      throw new Error('Contraseña incorrecto');
    }

    const payload = {
      userId: pacienteFound.id,
      userEmail: pacienteFound.email
    }
    const token = jwt.sign(
      payload, 'palabraSecreta',
      {
        expiresIn: '24h',
      }
    )
    return token
  }catch(error){
    throw error
  }
}
Paciente.findByEmail= async function (emailF) {
  try{
    const pacient = await Paciente.findOne({where: {email: emailF.trim()}})
    if(!pacient){
      throw new Error('Error: no existe un paciente con este correo')
    }
    return pacient
  }catch(error){
    throw error
  }
}

Paciente.createPaciente = async function (nombre, apellido, email, contraseña) {
  try {
    const pacient = await Paciente.create({nombre, apellido, email, contraseña});
    return pacient
  }catch (error){
    throw error;
  }
}
Paciente.updatePaciente = async function (id, nombre, apellido, email, contraseña) {
  try{
    const pacient = await Paciente.findByPk(id)
    if(!pacient){
      throw new Error('Error: no existe un paciente con este id')
    }
    return await pacient.update({nombre, apellido, email, contraseña})
  }catch(error){
    throw error
  }
}
Paciente.deletePaciente = async function (id) {
  try{
    const pacient = await Paciente.findByPk(id)
    if(!pacient){
      throw new Error('Error: no existe un paciente con este id')
    }
    return await pacient.destroy()
  }catch(error){
    throw error
  }
}
Paciente.listPacientes = async function () {
  try{
    const pacients = await Paciente.findAll({attributes: ['id', 'nombre', 'apellido', 'email']});
    return pacients.map(pacient => pacient.get({plain:true}))
  }catch(error){
    throw error
  }
}

module.exports = {Paciente};