const { DataTypes } = require('sequelize');
const { sequelize } = require('./../config/db.js');

const Persona = sequelize.define('Personas', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  apellido: {
    type: DataTypes.STRING,
    allowNull: false
  },
  edad: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

Persona.listPersona = async function () {
  try {
    const persona = await Persona.findAll({ attributes: ['id', 'nombre', 'apellido', 'edad', 'email'], raw: true });
    return persona
  } catch (error) {
    throw error
  }
}

Persona.createPersona = async function (nombre, apellido, edad, email) {
  try {
    const persona = await Persona.create({ nombre, apellido, edad, email });
    return persona
  } catch (error) {
    throw error;
  }
}

module.exports = { Persona }