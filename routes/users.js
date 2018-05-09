const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connection = require('./../connection');
var router = express.Router();
var bcrypt = require('bcrypt');
var db = require('./../models');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

// post registration information to MySQL database
router.post('/users', function(request, response){

	// get variables from form input
	var email = request.body.email;
	var password = request.body.password;
	var first = request.body.first;
	var last= request.body.last;
	var skills = request.body.skills;

	// take in variables and add to two tables
	function addUser(email, password, first, last, skills){

		// push registration data to Users table after encrypting password
		bcrypt.hash(password, 10, function(err, password) {

			db.Users.create({
				email: email,
				password: password,
				first: first,
				last: last
			}).then(function(data){
				response.status(200);
				console.log(data);
			}).catch(function(error){
				response.status(500);
			});
		});

		// push registration data to UserData table
		db.UserData.create({
			skills: skills
		}).then(function(data){
			response.status(200);
			console.log(data);
		}).catch(function(error){
			response.status(500);
		})
	}
	addUser(email, password, first, last, skills);
})

module.exports = router;