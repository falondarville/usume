const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport')
  	, LocalStrategy = require('passport-local').Strategy;
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
	checkEmail(email);
})

module.exports = router;