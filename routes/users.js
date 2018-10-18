'use strict';
const express = require('express');
const router = express.Router();

router.get('/enquetes/vtuber', function (req, res, next) {
  res.render('index', {
    title: 'questionnaire',
    Question: 'Q.　ddd？',
    firstItem: 'd_dragon',
    secondItem: 'sifue'

  });
});

module.exports = router;
