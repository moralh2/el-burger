// Set up the MySQL connection to the DB

// Require NPM mysql package
var mysql = require('mysql');

// Create connection 
var connection = mysql.createConnection({
    host: 'localhost',
    port: 8889,
    user: 'root',
    password: 'root',
    database: 'burgers_db'
});

// Initialize connection
connection.connect( function(error) {
    if(error) {
        console.log("There was an error trying to connect: " + error.stack);
        return;
    }
    console.log("Connected as ID: " + connection.threadId);
});

// Export connection
module.exports = connection;