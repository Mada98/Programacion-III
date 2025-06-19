const express = require('express');
const router = express.Router();
const {
  getAllResenas,
  getResenaById,
  createResena
} = require('../controllers/resenasController');

router.get('/', getAllResenas);

router.get('/:id', getResenaById)

router.post('/', createResena)

module.exports = router;