var express = require('express');
var router = express.Router();

console.log("I work");

/* GET home page. */
router.get('/', function(req, res, next) {
 	res.send('send resource');
});

module.exports = router;
