const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const connection = require('./../connection');
var router = express.Router();

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

// post registration information to MySQL database
// figuring out: possibly two tables, one for login data and the other for UserData upon log-in
router.post('/users', function(request, response){
	var email = request.body.email;
	// var password = request.body.password;
	var first = request.body.first;
	var last= request.body.last;
	var skills = request.body.skills;

	function addUser(email, first, last, skills){
		var queryString = "INSERT INTO users(email, first, last, skills) VALUES(?, ?, ?, ?)";
		connection.query(queryString, [email, first, last, skills], function(err, result) {
			response.json(result);
		} )

	}

	// data obtained from React registration form is printing to console
	console.log("Reading from post function")
	addUser(email, first, last, skills);
})

module.exports = router;