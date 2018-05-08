var express = require('express');
var router = express.Router();

console.log('Running index.js')

// will display user data from UserData table once logged in
router.get('/index', function(req, res, next) {
 	res.send({ express: 'this is the homepage' });
});

module.exports = router;