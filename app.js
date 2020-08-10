const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./routes");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(routes);
require("./data/database").connect();

app.get("/", (request, response, next) => {
  response.json({
    status: "Successful , Welcome to Quiz API",
  });
});

module.exports = app;
