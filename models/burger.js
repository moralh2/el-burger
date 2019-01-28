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
        });
    },
    eat: function(value, callback) {
        orm.updateOne('burgers', 'devoured', true, value, function(response) {
            callback(response);
        })
    }

}

// Export burger model
module.exports = burger;


// burger.all();
// burger.insertNew('Quarter Pounder');
// burger.all();
// burger.eat(7);
// burger.all();