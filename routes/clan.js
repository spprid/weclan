var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
    res.render('clan/index', {'title' : '클랜소개'});
});

router.get('/member', function(req, res, next){
    res.render('clan/member', {'title' : '클랜원안내'});
});

router.get('/join', function(req, res, next){
    res.render('clan/join', {'title' : '가입안내'});
});

module.exports = router;