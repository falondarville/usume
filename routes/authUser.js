const express = require('express');
const passport = require('passport')
const cors = require('cors')
  	, LocalStrategy = require('passport-local').Strategy;
const router = express.Router();
const db = require('./../models');
const app = express();

app.use(cors());

// this is a post route that allows us to grab the data from the form to query the database
router.post('/authuser', function(request, response){
	// passport get current user

	if(request.user) {
		response.json({
			firstName: request.user.first,
			lastName: request.user.last,
			email: request.user.email
		})
	} else {
		response.status(401);
		response.json({message: "not logged in"})
	}
})

module.exports = router;