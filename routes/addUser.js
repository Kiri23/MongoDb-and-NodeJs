var express = require('express');
var router = express.Router();
var kittySchema = require('../model/kitySchema');

var fluffy = new kittySchema({name:"kitty bd"})
/* GET home page. */

router.get('/', function(req, res, next) {
  res.send("hola from atom add");

  fluffy.save(function (err, fluffy) {
  if (err) return console.error(err);
    console.log("Item Saved");
});
  // res.render('index', { title: 'Express' });
});

// Comentario 
module.exports = router;
