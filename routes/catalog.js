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

router.post('/:catName', async (req, res) => {
  try {
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
    res.json({ allFlowers, allCats });
  } catch (err) {
    res.sendStatus(500);
  }
});

// forfetch Ручка для всех букетов
router.post('/', async (req, res) => {
  try {
    console.log('Я здесь');
    const allFlowers = await Flower.findAll();
    res.json({ allFlowers });
  } catch (err) {
    res.sendStatus(500);
  }
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

router.post('/sort/byDesc', async (req, res) => {
  try {
    const allCats = await Cat.findAll();
    const allFlowersByDesc = await Flower.findAll({
      order: [['price', 'DESC']],
    });
    const allFlowers = allFlowersByDesc;
    res.json({ allFlowers });
  } catch (err) {
    res.sendStatus(500);
  }
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

router.post('/sort/byAsc', async (req, res) => {
  // По возрастанию
  try {
    const allCats = await Cat.findAll();
    const allFlowersByAsc = await Flower.findAll({
      order: [['price', 'ASC']],
    });
    const allFlowers = allFlowersByAsc;
    res.json({ allFlowers });
  } catch (err) {
    res.sendStatus(500);
  }
});

router.post('/addToBin', async (req, res) => {

});

// Код

module.exports = router;
