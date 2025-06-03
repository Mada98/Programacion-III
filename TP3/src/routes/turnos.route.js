const {Router} = require('express');
const turnosController = require('../controllers/API/turnos.controller')
const { verifyTokenMiddleware } = require('../middlewares/verifyToken.middleware')
const { validate } = require('../middlewares/validate')
const { turnoSchema } = require('../schemas/turnos.schema')

const rutaTurnos = Router();
rutaTurnos.get('/', verifyTokenMiddleware, turnosController.getAllTurnos);
rutaTurnos.get('/:id', verifyTokenMiddleware, turnosController.getTurnoByIdPaciente);
rutaTurnos.post('/', verifyTokenMiddleware, validate(turnoSchema.create), turnosController.createTurno);
rutaTurnos.delete('/:id', verifyTokenMiddleware, turnosController.deleteTurno);

module.exports = rutaTurnos