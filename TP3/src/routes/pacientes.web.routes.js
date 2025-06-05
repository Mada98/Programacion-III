const { Router } = require('express');
const pacientesController = require('../controllers/API/pacientes.controller')
const router = Router();

router.get('/', pacientesController.listPacientesRender);

module.exports = router;