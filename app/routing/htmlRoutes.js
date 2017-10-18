// DEPENDENCIES
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {
  // Route to Survey page
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  // Default route to Home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};