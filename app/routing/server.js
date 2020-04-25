var express = require("express");
var path = require("path");
var friends = require("/app/data/friends.js");
var app = express();
require("dotenv").config();

const apiRoutes = require('./app/routing/apiRoutes');
const htmlRoutes = require('./app/routing/htmlRoutes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('app/public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

var PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});