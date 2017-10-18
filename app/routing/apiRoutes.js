// LOAD DATA
// =======================================================

var friendData = require("../data/friends");

// ROUTING
// =======================================================
module.exports = function(app) {

  // GET request Route to api
  app.get("/api/friends", function(req, res) {
    res.json(friendData);
  });

  // API POST request route /api/friends. 
  // To handle survey results and compatibility logic.
  app.post("/api/friends", function(req, res) {
    friendData.push(req.body);
  });
};
