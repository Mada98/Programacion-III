const { Router } = require('express');
const librosController = require('../controllers/API/libros.controller.js');

const rutaLibros = Router();

rutaLibros.get('/', librosController.listaLibros);
rutaLibros.post('/post', librosController.createLibro);

module.exports = rutaLibros;