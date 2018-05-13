const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
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
	var title = request.body.title;
	var environment = request.body.environment;
	var relationships = request.body.relationships;
	var priorities = request.body.priorities;
	var personality = request.body.personality;
	var workGoals = request.body.workGoals;
	var lifeGoals = request.body.lifeGoals;
	var accomodations = request.body.accomodations;

	function checkEmail(email){

		db.Users.findOne({
			where: {
				email: email
			}
		}).then(function(data){

			if (data == null){
				addUser(email, password, first, last, skills, title, environment, relationships, priorities, personality, workGoals, lifeGoals, accomodations);
			} else {
				throw {error: 1};
			}
			
		}).catch(function(error){

			response.status(422);
			response.json({message: "There was an error.", data: {email: "This email is already in use."}})
			return;
		})
	}

	// take in variables and add to two tables
	function addUser(email, password, first, last, skills, title, environment, relationships, priorities, personality, workGoals, lifeGoals, accomodations){

		// push registration data to Users table after encrypting password
		bcrypt.hash(password, 10, function(err, password) {

			db.Users.create({
				email: email,
				password: password,
				first: first,
				last: last
			}).then(function(data){

				// push registration data to UserData table
				db.UserData.create({
					skills: skills,
					title: title,
					environment: environment,
					relationships: relationships,
					priorities: priorities,
					personality: personality,
					workGoals: workGoals,
					lifeGoals: lifeGoals,
					accomodations: accomodations,
					UserId: data.id
				}).then(function(data){
					response.status(200);
					response.json(data);
				}).catch(function(error){
					response.status(500);
				})

			}).catch(function(error){
				response.status(500);
			});
		});


	}
	checkEmail(email);
})

module.exports = router;

