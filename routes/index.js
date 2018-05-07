var express = require('express');
var router = express.Router();

console.log('Running index.js')

// displays user information once logged in
router.get('/index', function(req, res, next) {
 	res.send({ express: 'this is the homepage' });
});

module.exports = router;
