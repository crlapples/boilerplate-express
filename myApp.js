require('dotenv').config();
let express = require('express');
let app = express();
console.log("Hello World");
const absolutePath = __dirname + '/views/index.html';
app.get("/", function(req, res) {
  res.sendFile(absolutePath);
});
app.use("/public", express.static(__dirname + "/public"));
app.get("/json", function(req, res) {
  if (process.env.MESSAGE_STYLE === "uppercase") {
    res.json({ "message": "HELLO JSON" })
  } else {
    res.json({ "message": "Hello json" })
  }
});
app.use(function(req, res, next) {
  console.log(req.method + " " + req.path + " - " + req.ip);
  next();
});
app.get("/now", function(req, res, next) {
  req.time = new Date().toString();
  next();
}, function(req, res) {
  res.json({time: req.time});
});



























 module.exports = app;
