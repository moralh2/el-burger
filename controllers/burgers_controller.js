// Import express
var express = require("express");

// Create router
var router = express.Router();

// Import the model for burger
var burger = require("../models/burger.js");

// Create home route
router.get("/", function (request, response) {
    burger.all(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        response.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(request, response) {
    burger.insertNew(request.body.burgerName, function (result) {
        console.log(result)
        response.json({ id: result.insertId });
    });
});

module.exports = router;