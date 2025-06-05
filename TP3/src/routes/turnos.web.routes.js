const { Router } = require('express');
const turnosController = require('../controllers/API/turnos.controller')
const { validate } = require('../middlewares/validate')
const { turnoSchema } = require('../schemas/turnos.schema')
const router = Router();

router.get('/', turnosController.listaDeTurnosRender);
router.post('/post', validate(turnoSchema.create), turnosController.createTurno);

module.exports = router;