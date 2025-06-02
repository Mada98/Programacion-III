const {Router} = require('express');
const turnosController = require('../controllers/API/turnos.controller');
const rutaTurnos = Router();

rutaTurnos.get('/', turnosController.getAllTurnos);
rutaTurnos.get('/:id', turnosController.getTurnoByIdPaciente);
rutaTurnos.post('/', turnosController.createTurno);
rutaTurnos.delete('/:id', turnosController.deleteTurno);

module.exports = rutaTurnos