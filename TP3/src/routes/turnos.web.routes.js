const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
  res.render('turnos/index'); 
});

module.exports = router;