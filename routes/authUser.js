const express = require('express');
const passport = require('passport')
  	, LocalStrategy = require('passport-local').Strategy;
var router = express.Router();
var db = require('./../models');
const app = express();

app.use(cors());

router.post('/authuser', function(request, response){
	console.log(request.body);
	// passport get current user
	res.json({request.user});
})

module.exports = router;