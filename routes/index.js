var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'questionnaire',
    Question: 'Q.　どっちのVTuber先生に教わりたい？',
    firstItem: 'd_dragon',
    secondItem: 'sifue'

  });
});

module.exports = router;
