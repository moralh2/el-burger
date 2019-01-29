// Import express
var express = require("express");

// Create router
var router = express.Router();

// Import the model for burger
var burger = require("../models/burger.js");

// Home route
router.get("/", function (request, response) {
    burger.all(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        response.render("index", hbsObject);
    });
});

// Post route for burgers -- only requires burgerName in request
router.post("/api/burgers", function (request, response) {
    burger.insertNew(request.body.burgerName, function (result) {
        console.log(result)
        response.json({ id: result.insertId });
    });
});

// Put route -- only to 1 column (devour), so only need ID
router.put("/api/burgers/:id", function (request, response) {
    burger.eat(request.params.id, function (result) {
        // 404 for no rows changed
        if (result.changedRows == 0) {
            return response.status(404).end();
        } else {
            response.status(200).end();
        }
    });
});

module.exports = router;