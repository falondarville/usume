const express = require('express');
const passport = require('passport')
const cors = require('cors')
  	, LocalStrategy = require('passport-local').Strategy;
const router = express.Router();
const db = require('./../models');
const app = express();

app.use(cors());

router.post('/authuser', function(request, response){
	if(request.user) {
		// query the second table
		db.UserData.find({
			where: {userId: request.user.id}
		}).then(function(data){
			response.json({
				skills: data.skills,
				firstName: request.user.first,
				lastName: request.user.last,
				email: request.user.email
			})
		})
	} else {
		response.status(401);
		response.json({message: "not logged in"})
	}
})

module.exports = router;