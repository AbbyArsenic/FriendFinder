// DEPENDENCIES
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");

// INITIALIZE EXPRESS
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// DATA PARSING
// =============================================================
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// ROUTER
// =============================================================
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

// LISTENER
// =============================================================
app.listen(process.env.PORT || PORT, function() {
  console.log("App listening on PORT " + PORT);
});
