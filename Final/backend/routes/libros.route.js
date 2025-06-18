const { Router } = require('express');
const librosController = require('../controllers/API/libros.controller.js');

const rutaLibros = Router();

rutaLibros.get('/libros', librosController.listaLibros);
rutaLibros.post('/libros', librosController.createLibro);
rutaLibros.put('/libros/:id', librosController.updateLibro);
rutaLibros.delete('/libros/:id', librosController.deleteLibro);

module.exports = rutaLibros;