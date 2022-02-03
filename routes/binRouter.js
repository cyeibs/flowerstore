const router = require('express').Router();
const sha256 = require('sha256'); // Шифровщик

const { Flower, Cat, JoinTable, Bin } = require('../db/models');

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

router.get('/', (req, res) => {
  //console.log("я тут ")
 res.render('bin');
});

module.exports = router;
