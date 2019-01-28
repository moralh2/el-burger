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
            burger: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

module.exports = router;