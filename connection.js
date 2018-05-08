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

// export the connection
module.exports = connection;