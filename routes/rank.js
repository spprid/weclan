var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
    res.render('rank/list', { title: '결과등록' });
});

router.get('/ranking', (req, res, next) => {
    res.render('rank/ranking', {title : '순위'});
});

module.exports = router;