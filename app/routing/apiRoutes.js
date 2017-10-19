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
    
    var match = "No match found";
    var n = friendData.length-1;
    var newFriend = friendData[n];

    for(var j = 0; j < n; j++) {
    var matchDiff = 100;
      var difference = 0;
      for(var i = 0; i < friendData[j].scores.length; i++) {
        difference += Math.abs(parseInt(newFriend.scores[i]) - parseInt(friendData[j].scores[i]));
      }
      if (matchDiff > difference) {
        matchDiff = difference;
        match = friendData[j];
      }
      console.log(friendData[j].name + ": " + difference);
    }

    console.log(match.name);
    res.send(match);
  });
};

