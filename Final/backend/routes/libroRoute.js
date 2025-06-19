const express = require('express');
const router = express.Router();
const {
  getAllLibros,
  getLibroById,
  createLibro,
  updateLibro,
  deleteLibro
} = require('../controllers/libroController');

router.get('/', getAllLibros);

router.get('/:id', getLibroById);

router.post('/', createLibro);

router.put('/:id', updateLibro);

router.delete('/:id', deleteLibro);

module.exports = router;