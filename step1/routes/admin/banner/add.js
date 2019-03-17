var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('./banner/add.ejs',{});
});

module.exports = router;
