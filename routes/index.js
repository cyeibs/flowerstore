const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('Privet');
});

module.exports = router;
