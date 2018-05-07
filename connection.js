// connects Node to MySQL
var mysql = require('mysql');

// database connection
var connection = mysql.createConnection({
	host: process.env.MYSQL_HOST || 'localhost',
	user: process.env.MYSQL_USER || 'root',
	password: process.env.MYSQL_PASSWORD || '',
	database: process.env.MYSQL_DB || 'usume'
})

// export the connection
module.exports = connection;