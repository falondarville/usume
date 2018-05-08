var createError = require('http-errors');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mysql = require('mysql');
var nodemon = require('nodemon');
var cors = require('cors')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const port = process.env.PORT || 3001;

var app = express();

// view engine setup - using React for front-end
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

// use API routes
app.use('/', indexRouter);
app.use('/', usersRouter);

// bodyParser set up
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// listen on port 3001 for dev
app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = app;
