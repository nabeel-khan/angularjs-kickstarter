// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');            // call express
var app        = express();                             // define our app using express
var bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/build'));
//app.use(express.static(__dirname));

var port = process.env.PORT || 8080;            // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();                          // get an instance of the express Router


// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Application running on port ' + port);

