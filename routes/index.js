var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hello From the Other Side' });
});


router.get('/yoda', function(req, res, next) {
  res.render('yoda', { title: 'A Jedi uses the Force for knowledge and defense, never for attack.”' });
});
module.exports = router;
