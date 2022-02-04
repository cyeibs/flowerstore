const express = require('express');
const router = express.Router();
const { User, Flower, Cat, JoinTable, Contact, Bin } = require('../db/models')

router.get('/signup', (req, res) => {
  res.render('signup')
});

router.post('/signup', async (req, res) => {
  const newUser = await User.create(req.body);
  req.session.user = newUser.name
  req.session.userid = newUser.id
  console.log(req.session.user);
  res.redirect('/catalog');
});

router.get('/signin', async (req, res) => {
  res.render('signin')
})

router.post('/signin', async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ where: { email } });

  if (user) {
    req.session.user = user.name
    req.session.userid = user.id
    res.redirect('/catalog');
  } else {
    res.redirect('/user/signup')
  }
})

router.get('/logout', (req, res) => {
  req.session.destroy();
  res.clearCookie('authorization');
  res.redirect('/');
})

router.get('/profile', async (req, res) => {
  const me = await User.findByPk(req.session.userid);
  console.log(me);
  res.render('profile', { me });
})

router.get('/admin', async (req, res) => {

  let adminname;
  const allCats = await Cat.findAll();

  try {
    adminname = await User.findOne({where: { name: req.session.user }, });
    if (adminname.name == 'admin') { 
      res.render('admin', {allCats});
    } else {
      return (error) }
  } catch (error) {
    return res.render('error', {
      message: 'У вас нет доступа',
      error: {}
    });
  }
})


router.post('/admin', async (req, res) => {
  const wait = req.body
  let popular
  if (req.body.popular == 'on') {
    popular = 'true'} else { popular = "false"}
  // console.log(req.body);
  const newFlower = await Flower.create({fName: req.body.name, descr: req.body.descr, pic: req.body.pic, price: req.body.price, popular: popular})
  const newFlowerId = await Flower.findOne({where: {fName : req.body.name}})
  const newCatFlower = await JoinTable.create({flowerId: newFlowerId.id, catId: req.body.catid})
  // const newFloweCat = await JoinTable.create({name: fName, descr: description, pic: pic, price: price, popular: popular})
  res.redirect('/user/admin');
});

router.post('/admin/addcat', async (req, res) => {
  const wamt = req.body
  console.log("=======>", wamt);
  let popular
  // if (req.body.popular == 'on') {
  //   popular = 'true'} else { popular = "false"}
  // console.log(req.body);
  const newCat = await Cat.create({catName: wamt.catname})
  // const newFlowerId = await Flower.findOne({where: {fName : req.body.name}})
  // const newCatFlower = await JoinTable.create({flowerId: newFlowerId.id, catId: req.body.catid})
  // const newFloweCat = await JoinTable.create({name: fName, descr: description, pic: pic, price: price, popular: popular})
  res.redirect('/user/admin');
});

router.post('/admin/addpoint', async (req, res) => {
  const wamt = req.body
  console.log("=======>", wamt);
  let popular
  // if (req.body.popular == 'on') {
  //   popular = 'true'} else { popular = "false"}
  // console.log(req.body);
  const newCat = await Contact.create(req.body)
  // const newFlowerId = await Flower.findOne({where: {fName : req.body.name}})
  // const newCatFlower = await JoinTable.create({flowerId: newFlowerId.id, catId: req.body.catid})
  // const newFloweCat = await JoinTable.create({name: fName, descr: description, pic: pic, price: price, popular: popular})
  res.redirect('/user/admin');
});


module.exports = router;
