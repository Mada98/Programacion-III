const { Router } = require('express');
const turnosController = require('../controllers/API/turnos.controller')
const router = Router();

router.get('/', turnosController.listaDeTurnosRender);

module.exports = router;