const {Router} = require('express');
const turnosController = require('../controllers/API/turnos.controller')
const { verifyTokenMiddleware } = require('../middlewares/verifyToken.middleware')
const { validate } = require('../middlewares/validate')
const { turnoSchema } = require('../schemas/turnos.schema')

const rutaTurnos = Router();
rutaTurnos.get('/', turnosController.getAllTurnos)
rutaTurnos.get('/lista', turnosController.listaDeTurnos);
rutaTurnos.get('/:id', turnosController.getTurnoByIdPaciente);
rutaTurnos.post('/', verifyTokenMiddleware ,validate(turnoSchema.create), turnosController.createTurno);
rutaTurnos.delete('/:id', turnosController.deleteTurno);


module.exports = rutaTurnos