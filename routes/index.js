var express = require('express');
var router = express.Router();
var math = require('./math');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hello From the Other Side' });
});


router.get('/yoda', function(req, res, next) {
  res.render('yoda', { title: 'A Jedi uses the Force for knowledge and defense, never for attack.”' });
});

// /api/add?n1=x&n2=y
router.get('/api/add', function(req, res, next){
  var n1 = (req.query.n1;
  var n2 = (req.query.n2;
  res.json(math.add(n1,n2));
});

module.exports = router;
