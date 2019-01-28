// Import the MySQL connection
var connection = require("./connection")


// Object Relational Mapper

var orm = {
    selectAll: function(tableName, ormCb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableName], function(error, result) {
            if (error) throw error;
            console.log(result);
            ormCb(result);
        });
    },
    insertOne: function(tableName, columnName, columnValue, ormCb) {
        var queryString = "INSERT INTO ?? (??) VALUES (?)";
        connection.query(queryString, [tableName, columnName, columnValue], function(error, result) {
            if (error) throw error;
            console.log(result);
            ormCb(result);
        });
    },
    updateOne: function(tableName, columnName, columnValue, burgerId, ormCb) {
        var queryString = "UPDATE ?? SET ?? = ? WHERE id = ?";
        connection.query(queryString, [tableName, columnName, columnValue, burgerId], function(error, result) {
            if (error) throw error;
            console.log(result);
            ormCb(result);
        });
    }
}

module.exports = orm;

// orm.selectAll('burgers');
// orm.insertOne('burgers', 'name', 'Big Mac');
// orm.selectAll('burgers');
// orm.updateOne('burgers', 'devoured', 1, 7);
// orm.selectAll('burgers');