const express = require('express');
const router = express.Router();
const { User, Entry } = require('../db/models')

router.get('/signup', (req, res) => {
  res.render('signup')
});

router.post('/signup', async (req, res) => {
  const newUser = await User.create(req.body);
  req.session.user = newUser.username
  req.session.userid = newUser.id
  console.log(req.session.user);
  res.redirect('/user/profile');
});

router.get('/signin', async (req, res) => {
  res.render('signin')
})

router.post('/signin', async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ where: { email } });
  console.log(user.id);
  if (user) {
    req.session.user = user.username
    req.session.userid = user.id
    res.redirect('/user/profile');
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


module.exports = router;
