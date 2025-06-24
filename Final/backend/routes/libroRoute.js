const express = require('express');
const router = express.Router();
const {
  getAllLibros,
  getLibroById,
  createLibro,
  updateLibro,
  deleteLibro
} = require('../controllers/libroController');
const { libroSchema } = require('../schemas/libro.schema')
const { validate } = require('../middleware/validate')

router.get('/', getAllLibros);
router.get('/:id', getLibroById);
router.post('/', validate(libroSchema.create), createLibro);
router.put('/:id', validate(libroSchema.update), updateLibro);
router.delete('/:id', deleteLibro);

module.exports = router;