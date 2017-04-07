var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var kitySchema = require('../model/kitySchema');

var kitten;

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/s', (req, res, next) => {
    res.send("value");
});

router.get('/search', (req, res, next) => {
  kitySchema.find(function (err, kittens) {
      if (err) return console.error(err);
      kitten = kittens[4].name
      console.log(kitten);
     res.send("Usuario: "+kitten);
});

 // res.send("hola retrieving user: " + kitten);


});

module.exports = router;
