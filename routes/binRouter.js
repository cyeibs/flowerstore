const router = require('express').Router();
const sha256 = require('sha256'); // Шифровщик
const Sequelize = require("sequelize");

const { Flower, Cat, JoinTable, Bin, User } = require('../db/models');



// router.get('/bin', async (req, res) => {
//   try {
//    const allFlowers = await Flower.findAll(
//      {
//        include: [
//          {
//            model : User,
//            where: {
//              status: true,
            
//             } 
//          }
//        ]
//      }
//    );
//   //  if (req.originalUrl === '/bin') {
//      res.render('bin', { allBins });
//   //  }
   
//  } catch (error) {
//    console.log(error)
//  }
 
// });


router.get('/', async (req, res) => {
  // const allBins = await Bin.findAll();
  const allBins = await Bin.findAll({
    include: {
      model: Flower,
      required: true,
    },
    where: { userId: req.session.userid },
    raw: false,
  });

//   const allCountBin = await Bin.findAll({
//     attributes: [Sequelize.fn('COUNT', Sequelize.col('Bin.count'))],
//     include: [{ model: User, attributes: ['name'], required: true,}, { model: Flower, attributes: ['fName'], required: true, } ],
//     // order: "Bin.id",
//     // oder: "Flower.id",
//     // order: "User.id"
// }).then(function(collection){
//     res.send(collection);
// });
//   console.log("=====>", allCountBin); //?
//   //console.log("я тут ")

 res.render('bin', {allBins});
});


router.delete('/:id', async (req, res) => {
  try{
  const entryTemp = await Bin.findOne({where:{id:req.params.id}});
  await Bin.destroy({where:{id:req.params.id}});
  } catch (error) {
    return res.json({ isDeleteSuccessful: false, errorMessage: 'Не удалось удалить запись из базы данных.' });
  }

  return res.json({ isDeleteSuccessful: true });
});


router.patch('/:id', async (req, res) => {
  try{
  const entryTemp = await Bin.findOne({where:{id:req.params.id}});
  await Bin.update(req.body );
  } catch (error) {
    return res.json({ isDeleteSuccessful: false, errorMessage: 'Не удалось удалить запись из базы данных.' });
  }

  return res.json({ isDeleteSuccessful: true });
});

module.exports = router;
