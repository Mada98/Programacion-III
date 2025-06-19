const express = require('express');
const router = express.Router();
const {
  getAllResenas,
  getResenaById,
  createResena,
  updateResena,
  deleteResena
} = require('../controllers/resenasController');

router.get('/', getAllResenas);

router.get('/:id', getResenaById);

router.post('/', createResena);

router.put('/:id', updateResena);

router.delete('/:id', deleteResena)
module.exports = router;