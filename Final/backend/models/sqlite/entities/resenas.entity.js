const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db.js');
const { Libro } = require('./libros.entity.js')

const Resenas = sequelize.define('Reseñas', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_libro: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    resena: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

Resenas.listResena = async function () {
    try{
        const resena = await Resenas.findAll({ attributes: ['id', 'id_libro', 'resena'], raw: true})
        return resena
    }catch (error) {
        throw error
    }
}

Resenas.createResena = async function (id_libro, resena) {
    try{
        const libro = await Libro.findByPk(id_libro)
        if (!libro){
            throw new Error('Error: No existe un libro con este id')
        }
        const rese = await Resenas.create({id_libro, resena})
        return rese
    }catch(error){
        throw error
    }
}

module.exports = { Resenas }