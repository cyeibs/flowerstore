const router = require('express').Router();

router.get('/', (req, res) => {
 res.render('whyUs');
});

module.exports = router;
