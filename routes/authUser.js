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
	response.json({hi : 123, user: request.user});
})

module.exports = router;