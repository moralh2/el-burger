// Import ORM 
var orm = require("../config/orm.js");

var burger = {
    all: function(callback) {
        orm.selectAll('burgers', function(response) {
            callback(response);
        });
    },

    insertNew: function(value, callback) {
        orm.insertOne('burgers', 'name', value, function(response) {
            callback(response);
        })
    }
}

burger.all();
burger.insertNew('Quarter Pounder');
burger.all();

