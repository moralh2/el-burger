// Import the MySQL connection
var connection = require("./connection")


// Object Relational Mapper

var orm = {
    selectAll: function(tableName) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableName], function(error, result) {
            if (error) throw error;
            console.log(result);
        });
    },
    insertOne: function(burgerName) {
        var queryString = "INSERT INTO burgers (name) VALUES (?)";
        connection.query(queryString, [burgerName], function(error, result) {
            if (error) throw error;
            console.log(result);
            // res.redirect("/");
        });
    }
}

orm.selectAll('burgers');
// module.exports = orm;
orm.insertOne('Big Mac');
orm.selectAll('burgers');