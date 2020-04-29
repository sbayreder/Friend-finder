var express = require("express");
var path = require("path");
var app = express();
require("dotenv").config();

 require('./routing/apiRoutes')(app);
 require('./routing/htmlRoutes')(app);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('app/public'));
//app.use('/api', apiRoutes);
//app.use('/', htmlRoutes);

var PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});