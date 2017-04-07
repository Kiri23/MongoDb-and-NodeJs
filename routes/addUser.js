var express = require('express');
var router = express.Router();
var kittySchema = require('../model/kitySchema');

var fluffy = new kittySchema({name:"kitty bd",title:"titulo"})
/* GET home page. */

router.get('/', function(req, res, next) {
  res.send("hola from atom add");

  // parece que save solamente se puede usar una sola vez en la corrida
  kittySchema.create({name:"kitty bd reatc",title:"titulo reatc"},function (err, fluffy,numa) {
  if (err) return console.error(err);
    console.log(numa + " affec");
    console.log(fluffy + "this is fluffy");
    console.log("Item Saved");
    // next();
})
  // res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next) {
  res.send("hola from atom add");

  fluffy.save(function (err, fluffy) {
  if (err) return console.error(err);
    console.log("Item Saved");
});
  // res.render('index', { title: 'Express' });
});

module.exports = router;
