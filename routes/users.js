var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var kitySchema = require('../model/kitySchema');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/search', (req, res, next) => {
    
    // res.send("hola retrieving user");
});

module.exports = router;
