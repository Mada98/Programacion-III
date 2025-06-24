const express = require('express');
const router = express.Router();
const {
  getAllResenas,
  getResenaById,
  createResena,
  updateResena,
  deleteResena
} = require('../controllers/resenasController');
const { resenaSchema } = require('../schemas/resena.schema')
const { validate } = require('../middleware/validate')

router.get('/', getAllResenas);
router.get('/:id', getResenaById);
router.post('/', validate(resenaSchema.create), createResena);
router.put('/:id', validate(resenaSchema.update), updateResena);
router.delete('/:id', deleteResena);

module.exports = router;