const express = require('express');
const passport = require('passport')
  	, LocalStrategy = require('passport-local').Strategy;
var router = express.Router();
var db = require('./../models');
const app = express();

app.use(cors());

// this is a post route that allows us to grab the data from the form to query the database
// this is for the log-in page
router.post('/authuser', function(request, response){
	console.log(request.user);
	// passport get current user
	res.json({request.user});
})

module.exports = router;