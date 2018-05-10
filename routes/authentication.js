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
router.post('/login', function(request, response){

	// get variables from form input
	var email = request.body.email;
	var password = request.body.password;

	function checkEmail(email){

		db.Users.findOne({
			where: {
				email: email
			}
		}).then(function(data){

			if (data == null){
				loginUser(email, password);
			} else {
				throw {error: 1};
			}
			
		}).catch(function(error){

			response.status(422);
			response.json({message: "There was an error.", data: {invalid: "Invalid credentials."}})
			return;
		})
	}

	function loginUser(email, password){

		bcrypt.hash(password, 10, function(err, password) {

			db.Users.create({
				email: email,
				password: password,
				first: first,
				last: last
			}).then(function(data){
				response.status(200);
				response.json(data);
			}).catch(function(error){
				response.status(500);
			});
		});


	}
	checkEmail(email);
})

module.exports = router;