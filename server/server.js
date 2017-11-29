var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var port = 5000;

//routes
var registration = require('./routes/registration');
var pet = require('./routes/pet');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static('server/public'));

app.use('/registration',registration);
app.use('/pet',pet);

app.listen(port);
console.log("Listening on port: ", port);