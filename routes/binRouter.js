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

module.exports = router;
