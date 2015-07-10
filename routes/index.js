var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/requests', function(req, res, next) {
  res.render('requests');
});

router.get('/tasks', function(req, res, next) {
  res.render('tasks');
});

router.get('/stakeholders', function(req, res, next) {
  res.render('stakeholders');
});

module.exports = router;
