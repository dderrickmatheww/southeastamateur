var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var players = require("../models/players");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    res.render("index");
});
router.get("/compete", function(req, res) {
  res.render("compete");
});
router.get("/contact", function(req, res) {
  res.render("contact");
});
router.get("/leaderboards", function(req, res) {
  players.all("players", function(data1) {
    players.all("fortnite", function(data2) {
      players.all("apex", function(data3) {
        players.all("rocket_league", function(data4) {
          players.all("nba_2k", function(data5) {
            var playerObject = {
              nba_2k: data5,
              rocket_league: data4,
              apex: data3,
              fortnite: data2,
              players: data1
            };
            console.log(playerObject);
            res.render('leaderboard', playerObject)
          })
        })
      })
    })
  })
});
router.get("/tournaments", function(req, res) {
  res.render("tournament");
});


// Export routes for server.js to use.
module.exports = router;
