// Import the MySQL connection
var connection = require("./connection")


// Object Relational Mapper

var orm = {
    selectAll: function(tableName, cb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableName], function(error, result) {
            if (error) throw error;
            console.log(result);
            console.log("AAA");
            // result.redirect("/");
            cb(result);

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
    updateOne: function(tableName, columnName, columnValue, burgerId) {
        var queryString = "UPDATE ?? SET ?? = ? WHERE id = ?";
        connection.query(queryString, [tableName, columnName, columnValue, burgerId], function(error, result) {
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
// orm.updateOne('burgers', 'devoured', 1, 7);
// orm.selectAll('burgers');