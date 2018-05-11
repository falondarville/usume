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
router.post('/login',
 passport.authenticate('local', { successRedirect: 'http://localhost:3001/loggedin',
                                  failureRedirect: 'http://localhost:3001/login',
                                  failureFlash: true })
);

module.exports = router;