// Import express
var express = require("express");

// Assign PORT
var PORT = process.env.PORT || 8080;

// Create app server
var app = express();

// Serve static content from public dir
app.use(express.static("public"));

// Parsing for requests
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Import Handlebars
var exphbs = require("express-handlebars");

// Set up app to user Handlebars as template engine
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

// Import routes, allow server to access
var routes = require("./controllers/burgers_controller.js")
app.use(routes);

// Start server
app.listen(PORT, function() {
    console.log("App is up on on http://localhost:" + PORT);
});