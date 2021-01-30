var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/login', function(req, res, next) {
  res.render('users/login', { title: '로그인' });
});

router.get('/logout', function(req, res, next){
  res.redirect('/');
});

module.exports = router;
