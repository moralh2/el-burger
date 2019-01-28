// Import ORM 
var orm = require("../config/orm.js");

var burger = {
    all: function(modelCb) {
        orm.selectAll('burgers', function(response) {
            modelCb(response);
        });
    },
    insertNew: function(value, modelCb) {
        orm.insertOne('burgers', 'name', value, function(response) {
            modelCb(response);
        });
    },
    eat: function(value, modelCb) {
        orm.updateOne('burgers', 'devoured', true, value, function(response) {
            modelCb(response);
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