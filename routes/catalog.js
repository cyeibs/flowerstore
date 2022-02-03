const express = require('express');
const sha256 = require('sha256'); // Шифровщик
const router = express.Router(); // Подключение роутеров
const { Flower } = require('../db/models'); // Подключение модели
// const { checkAuthorisation } = require('../middleware/allMiddle'); // TODO: Подключение мидлваров

// /catalog

router.get('/', async (req, res) => {
  const { allFlowers } = await Flower.findAll();
  res.render('catalog', { allFlowers });
});

//Код

module.exports = router;
