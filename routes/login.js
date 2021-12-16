var express = require('express');
var router = express.Router();
var async = require('async');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('login');
});

router.post('/', function(req, res) {
    res.send(req.body.email);
});

module.exports = router;
