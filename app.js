const createError = require('http-errors');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mysql = require('mysql');
const nodemon = require('nodemon');
const cors = require('cors')
const bcrypt = require('bcrypt');
const session = require('express-session');
const passport = require('passport')
  	, LocalStrategy = require('passport-local').Strategy;
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const loginRouter = require('./routes/authentication');
const authRouter = require('./routes/authUser');
const db = require('./models');

const port = process.env.PORT || 3001;

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(session({
  secret: "cactus mom",
  resave: true,
  name: "chocolateChip",
  proxy: true,
  saveUninitialized: true
}));

// passport initialize and serialize
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
app.use('/', authRouter);

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

  console.log(err);
  // render the error page
  res.status(err.status || 500);
  res.json({err});
});

// listen on port 3001 for dev and sync sequelize
db.sequelize.sync().then(function(){
	app.listen(port, () => console.log(`Listening on port ${port}`));
})

module.exports = app;
