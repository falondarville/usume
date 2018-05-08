const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const connection = require('./../connection');
var router = express.Router();
var bcrypt = require('bcrypt');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

// post registration information to MySQL database
router.post('/users', function(request, response){
	var email = request.body.email;
	var password = request.body.password;
	var first = request.body.first;
	var last= request.body.last;
	var skills = request.body.skills;

	function addUser(email, password, first, last){

		bcrypt.hash(password, 10, function(err, password) {
  			var queryString = "INSERT INTO users(email, password, first, last) VALUES(?, ?, ?, ?)";
			connection.query(queryString, [email, password, first, last], function(err, result) {
				response.json(result);
				console.log(password);
		});

	});

		// var queryStringData = "INSERT INTO userData(skills) VALUES(?)";
		// connection.query(queryStringData, [skills], function(error, response){
		// 	response.json(response);
		// });
}

	// data obtained from React registration form is printing to console
	console.log("Reading from post function")
	addUser(email, password, first, last);
})

module.exports = router;