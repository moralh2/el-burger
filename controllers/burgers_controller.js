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
        console.log("CCCC");

        console.log(hbsObject);
        // res.end("HOla");
        response.render("index", hbsObject);
    });
});

module.exports = router;