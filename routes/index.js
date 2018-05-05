var express = require('express');
var router = express.Router();

console.log("I work");

/* GET home page. */
router.get('/', function(req, res, next) {
 	res.send('hello!');
});

module.exports = router;
