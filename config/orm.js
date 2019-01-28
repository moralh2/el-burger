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
    insertOne: function(tableName, columnName, columnValue) {
        var queryString = "INSERT INTO ?? (??) VALUES (?)";
        connection.query(queryString, [tableName, columnName, columnValue], function(error, result) {
            if (error) throw error;
            console.log(result);
            // res.redirect("/");
        });
    },
    updateOne: function(burgerId) {
        var queryString = "UPDATE burgers SET devoured = 1 WHERE id = ?";
        connection.query(queryString, [burgerId], function(error, result) {
            if (error) throw error;
            console.log(result);
            // res.redirect("/");
        });
    }
}

module.exports = orm;

// orm.selectAll('burgers');
// orm.insertOne('burgers', 'name', 'Big Mac');
// orm.selectAll('burgers');
// orm.updateOne(7);
// orm.selectAll('burgers');