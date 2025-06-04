const {Router} = require('express');
const pacientesController = require('../controllers/API/pacientes.controller.js');
const { verifyTokenMiddleware } = require('../middlewares/verifyToken.middleware.js')
const { pacienteSchema } = require('../schemas/paciente.schema.js')
const { validate } = require('../middlewares/validate.js')

const rutaPacientes = Router();
rutaPacientes.get('/', verifyTokenMiddleware, pacientesController.getAllPacientes);
rutaPacientes.post('/login', validate(pacienteSchema.login), pacientesController.login);
rutaPacientes.post('/', validate(pacienteSchema.create), pacientesController.createPaciente);
rutaPacientes.put('/:id', verifyTokenMiddleware, validate(pacienteSchema.update),pacientesController.updatePaciente);
rutaPacientes.delete('/:id', verifyTokenMiddleware, pacientesController.deletePaciente);


module.exports = rutaPacientes;

// id:4 email:baezavilamateo@gmail.com contra:123456789