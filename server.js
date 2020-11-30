require('dotenv').config()
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require("./routes");
var bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Testing to see push to main

// test comment

// test #2

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);


app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
