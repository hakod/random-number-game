var path = require("path");
var express = require("express");
var bodyParser = require("body-parser");

var app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get("/", function(req, res) {
  res.sendFile(path.resolve("index.html"));
});

app.post("/guess", urlencodedParser, function(req, res) {
  var rand = Math.floor(Math.random() * 100);
  if (req.body.num === rand) {
    res.sendFile(path.resolve("guess.html"));
  } else if (req.body.num > rand) {
    res.status(404).send("Too high");
  } else if (req.body.num < rand) {
    res.status(404).send("Too low");
  }
  console.log(req.body, rand);
});

var port = process.env.PORT || 3000;

app.listen(port, function(error) {
  if (error) throw error;
  console.log("Express server listening on port", port);
});

module.exports = app;
