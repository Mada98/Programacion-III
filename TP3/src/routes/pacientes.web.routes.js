const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
  res.render('pacientes/index'); 
});

module.exports = router;