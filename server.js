// Dependencies
var express = require("express");
var mongoose = require("mongoose");
var expressHandlebars = require("express-handlebars");
var bodyParser = require("body-parser");

//Ports
var PORT = process.env.PORT || 3000;

//Express
var app = express();

//Express Router
var router = express.Router();

//Require our routes files pass our router object
require("./config/routes")(router);

//Designating Public folder into Static directory
app.use(express.static(__dirname + "/public"));

//Handlebar connection to Express app
app.engine("handlebars", expressHandlebars({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

//bodyParser
app.use(bodyParser.urlencoded({
    extended: false
}));

//Router Middleware
app.use(router);

//If deployed, use the deployed database, otherwise use the local mongoHeadlines database
var db = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

//Connect mongoose to our database
mongoose.connect(db, function(error) {
    //Log errors connecting with mongoose
    if (error) {
        console.log(error);
    }
    //Or log a success message if otherwise
    else {
        console.log("mongoose connection is successful");
    }
});

//Listen on the port
app.listen(PORT, function() {
    console.log("Listening on port:" + PORT);
});