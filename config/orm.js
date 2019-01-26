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
    }
}

orm.selectAll('burgers');
// module.exports = orm;