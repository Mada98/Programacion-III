const { Router } = require('express');
const resenasController = require('../controllers/API/resenas.controller');

const rutaResena = Router();

rutaResena.get('/resena', resenasController.listaResenas);
rutaResena.post('/resena', resenasController.createResenaN);

module.exports = rutaResena