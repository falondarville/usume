var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/users', function(req, res) {

	var email = request.body.email;
	var first = request.body.first;
	var last= request.body.last;
	var skills = request.body.skills;
 //    res.json([
	//   {id: 1, username: "Falon"},
	//   {id: 2, username: "Marie"}
	// ]);

	console.log("Input from registration form: ", email, first, last, skills)
});

module.exports = router;
