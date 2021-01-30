var express = require('express');
var router = express.Router();

// 로그인
router.get('/login', function(req, res, next) {
  res.render('users/login', { title: '로그인' });
});

// 로그아웃
router.get('/logout', function(req, res, next){
  res.redirect('/');
});

// 회원가입
router.get('/join', (req, res, next) => {
  res.render('users/join', { title: '회원가입' });
});

module.exports = router;
