const express = require('express');
const sha256 = require('sha256'); // Шифровщик
const router = express.Router(); // Подключение роутеров
const { Flower, Cat, JoinTable } = require('../db/models'); // Подключение модели
// const { checkAuthorisation } = require('../middleware/allMiddle'); // TODO: Подключение мидлваров

// /catalog

router.get('/', async (req, res) => {
  const allFlowers = await Flower.findAll();
  const allCats = await Cat.findAll();
  if (req.originalUrl === '/catalog') {
    res.render('catalog', { allFlowers, allCats });
  }
});

router.get('/:catName', async (req, res) => {
  const allCats = await Cat.findAll();
  const catName = req.params.catName;
  const allFlowersByCatName = await Flower.findAll({
    include: [
      {
        model: Cat,
        where: { catName: `${catName}` }, //
      },
    ],
  });
  const allFlowers = allFlowersByCatName;
  res.render('catalog', { allFlowers, allCats });
});

router.get('/sort/byDesc', async (req, res) => {
  // По убыванию
  const allCats = await Cat.findAll();
  const allFlowersByDesc = await Flower.findAll({
    order: [['price', 'DESC']],
  });
  const allFlowers = allFlowersByDesc;

  res.render('catalog', { allFlowers, allCats });
});

router.get('/sort/byAsc', async (req, res) => {
  // По возрастанию
  const allCats = await Cat.findAll();
  const allFlowersByAsc = await Flower.findAll({
    order: [['price', 'ASC']],
  });
  const allFlowers = allFlowersByAsc;

  res.render('catalog', { allFlowers, allCats });
});

// Код

module.exports = router;
