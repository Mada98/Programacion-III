const { Router } = require('express');
const pacientesController = require('../controllers/API/pacientes.controller')
const { validate } = require('../middlewares/validate')
const { pacienteSchema } = require('../schemas/paciente.schema')
const router = Router();

router.get('/', pacientesController.listPacientesRender);
router.post('/post', validate(pacienteSchema.create), pacientesController.createPaciente)

module.exports = router;