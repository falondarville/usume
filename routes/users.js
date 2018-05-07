const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const connection = require('./connection');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

const port = process.env.PORT || 3001;

app.post('/users', function(request, response){
	// do I need to JSON.stringify?
	var email = JSON.stringify(request.body.email);
	// var password = request.body.password;
	var first = JSON.stringify(request.body.first);
	var last= JSON.stringify(request.body.last);
	var skills = JSON.stringify(request.body.skills);
	var passingData = [email, first, last, skills];
	// request.query

	// data obtained from React registration form is printing to console
	console.log(email, first, last, skills);

	connection.query("INSERT INTO users(email, first, last, skills) VALUES(?, ?, ?, ?)", [passingData], function(err, result){
	console.log("Success");
	})
	// response.send({
	// 	email: email,
	// 	// password: password, 
	// 	first: first, 
	// 	last: last, 
	// 	skills: skills});

	// push to mySQL
	// var queryString = "INSERT INTO users(email, first, last, skills) VALUES(?, ?, ?, ?)";
	// connection.query(queryString, [email, first, last, skills], function(error, result) {
	// 	if (error) throw error;
	// 		connection.query('SELECT * FROM users', function(err, results) {
 //        		if (err) throw err
 //        			console.log(results[0].email)
 //        			console.log(results[0].first)
 //        			console.log(results[0].last)
 //        			console.log(results[0].skills)
	// })
// })

// app.get('/users', (req, res) => {
//   res.send({ express: 'Hello From Express' });
// });

app.listen(port, () => console.log(`Listening on port ${port}`));
