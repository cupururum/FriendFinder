const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()

var PORT = process.env.PORT || 8008;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });