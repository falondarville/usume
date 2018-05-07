const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.post('/users', function(request, response){
	var email = request.body.email;
	var first = request.body.first;
	var last= request.body.last;
	var skills = request.body.skills;
	
	console.log(email, first, last, skills);
	response.send({email: email, 
		first: first, 
		last: last, 
		skills: skills});

	// push to mySQL
})

const port = process.env.PORT || 3001;

app.get('/users', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));



// var express = require('express');
// var router = express.Router();

// // adds newly registered users to the database
// router.post('/users', function(req, res) {

// 	// var email = request.body.email;
// 	// var first = request.body.first;
// 	// var last= request.body.last;
// 	// var skills = request.body.skills;

//     res.json([
// 	  {id: 1, username: "Falon"},
// 	  {id: 2, username: "Marie"}
// 	]);
// 	// var queryString = "INSERT INTO ??(??) VALUE(?)";
// 	// connection.query(queryString, ["users", "email, first, last, skills"], email, first, last, skills)
// 	// 	if (error) throw error;
// 	// }


// 	// console.log("Input from registration form: ", email, first, last, skills)
// });

// module.exports = router;
