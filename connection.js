// connects Node to MySQL
var mysql = require('mysql');

// database connection
var connection = mysql.createConnection({
	host: process.env.MYSQL_HOST || 'localhost',
	user: process.env.MYSQL_USER || 'root',
	password: process.env.MYSQL_PASSWORD || '',
	database: process.env.MYSQL_DB || 'usume'
})

connection.connect((err) => {
	if(err) {
		throw err;
	} else {
		console.log("MySQL connected");
		}
});

// this is working
// connection.query('SELECT * FROM users', function(err, result){
// if (err){
// 	throw err
// } else {
// 	console.log("Reading from connection.js the items already in database")
// 	console.log(result[0].email)
// 	console.log(result[0].first)
// 	console.log(result[0].last)
// 	console.log(result[0].skills)
// 	}
// })

// export the connection
module.exports = connection;