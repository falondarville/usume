var express = require('express');
var router = express.Router();

console.log('Running index.js')

// displays user information once logged in
router.get('/index', function(req, res, next) {
 	res.send('send resource');
});

module.exports = router;
