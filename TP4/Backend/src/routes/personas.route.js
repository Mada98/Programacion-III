const { Router } = require('express');
const personasController = require('../controllers/API/personas.controller.js');

const rutaPersonas = Router();

rutaPersonas.get('/', personasController.listaPersona);
rutaPersonas.post('/post', personasController.createPersona);

module.exports = rutaPersonas;