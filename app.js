var createError = require('http-errors');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mysql = require('mysql');
var nodemon = require('nodemon');
var cors = require('cors')
var bcrypt = require('bcrypt');
var session = require('express-session');
var passport = require('passport')
  	, LocalStrategy = require('passport-local').Strategy;
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/authentication');
var db = require('./models');

const port = process.env.PORT || 3001;

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(session({
  secret: "cactus mom"
}));

// passport initialize
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done){
  done(null, user.id);
})

passport.deserializeUser(function(id, done){
  db.Users.findById(id).then(function(user){
    if(user){
      done(null, user.get());
    } else {
      done(user.errors, null);
    }
  })
})

// use API routes
app.use('/', indexRouter);
app.use('/', usersRouter);
app.use('/', loginRouter);

// bodyParser set up
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// passport log in authentication
passport.use(new LocalStrategy({
	usernameField: 'email',
	passwordField: 'password'
},
  function(username, password, done) {
    db.Users.findOne({ 
      where:{ email: username }
      }).then(function(user){
        console.log("THIS IS FROM PASSPORT", user)
        if (user ==null) {
          return done(null, false, {message: 'Incorrect credentials'})
        }
        bcrypt.compare(password, user.password, function(err, res){
          if(res) {
              done(null, user)
          } else {
              done(null, false, { message: 'Incorrect password.' })
          }
      });
        })
      }
    ))

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({err});
});

// listen on port 3001 for dev and sync sequelize
db.sequelize.sync().then(function(){
	app.listen(port, () => console.log(`Listening on port ${port}`));
})

module.exports = app;
