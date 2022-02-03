const router = require('express').Router();

router.get('/', (req, res) => {
 res.render('popular');
});

module.exports = router;
