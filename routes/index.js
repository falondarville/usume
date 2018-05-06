var express = require('express');
var router = express.Router();

console.log('Running index.js')

router.get('/', function(req, res, next) {
 	res.send('send resource');
});

module.exports = router;
