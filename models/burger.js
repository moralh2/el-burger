// Import ORM 
var orm = require("../config/orm.js");

var burger = {
    all: function(callback) {
        orm.selectAll('burgers', function(response) {
            callback(response);
        });
    }
}

burger.all();