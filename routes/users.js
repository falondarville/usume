const express = require('express');

const app = express();
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
