'use strict';
const express = require('express');
const router = express.Router();

router.post('/vtuber', function (req, res, next) {
  res.render('enquetes', {
    title: 'enquetes'

  });
});

module.exports = router;