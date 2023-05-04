const express = require("express");
const router = require("express").Router();
const bodyParser = require("body-parser")
const UserRoute = require("./routes/user.routes");
const spaceRoute = require('./routes/space.router');

const app = express();

app.use(bodyParser.json())

 app.use("/",UserRoute);
 app.use("/",spaceRoute);

 

 

module.exports = app;