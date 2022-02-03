const router = require('express').Router();


router.get('/', (req, res) => {
  res.render('aboutUs');
 });



module.exports = router;
