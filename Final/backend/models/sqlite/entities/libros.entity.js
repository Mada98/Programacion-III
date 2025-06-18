const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db.js');

const Libro = sequelize.define('Libros', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  autor: {
    type: DataTypes.STRING,
    allowNull: false
  },
  genero: {
    type: DataTypes.STRING,
    allowNull: false
  },
  estado: {
    type: DataTypes.STRING,
    allowNull: false
  },
  rating: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
});

Libro.listLibro = async function () {
  try {
    const libro = await Libro.findAll({ attributes: ['id', 'nombre', 'autor', 'genero', 'estado', 'rating'], raw: true });
    return libro
  } catch (error) {
    throw error
  }
}

Libro.createLibro = async function (nombre, autor, genero, estado, rating) {
  try {
    const libro = await Libro.create({ nombre, autor, genero, estado, rating });
    return libro
  } catch (error) {
    throw error;
  }
}

Libro.updateLibro = async function (id, nombre, autor, genero, estado, rating) {
  try {
    const libro = await Libro.findByPk(id)
    if (!libro) {
      throw new Error('Error: no existe un libro con este id')
    }
    return await libro.update({ nombre, autor, genero, estado, rating })
  } catch (error) {
    throw error;
  }
}

Libro.deleteLibro = async function (id) {
  try {
    const libro = await Libro.findByPk(id)
    if (!libro) {
      throw new Error('Error: no existe un libro con este id')
    }
    return await libro.destroy()
  } catch (error) {
    throw error
  }
}
module.exports = { Libro }