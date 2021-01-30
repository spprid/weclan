var express = require('express');
var router = express.Router();

router.get('/:bbs_idx', function(req, res, next){
    res.render('bbs/list', {title : '게시판 목록'});
});

router.get('/:bbs_idx/create', function(req, res, next){
    res.render('bbs/create', {title : 'Express'});
});

router.get('/:bbs_idx/:seq', function(req, res, next){
    res.render('bbs/read', {title : 'Express'});
});

module.exports = router;