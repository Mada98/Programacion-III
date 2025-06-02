const {Router} = require('express');
const pacientesController = require('../controllers/API/pacientes.controller.js');
const rutaPacientes = Router();

rutaPacientes.get('/', pacientesController.getAllPacientes);
rutaPacientes.post('/', pacientesController.createPaciente);
rutaPacientes.put('/:id', pacientesController.updatePaciente);
rutaPacientes.delete('/:id', pacientesController.deletePaciente);

module.exports = rutaPacientes;