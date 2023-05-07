const express = require("express");
const router = require("express").Router();
const bodyParser = require("body-parser")
const UserRoute = require("./routes/user.routes");
const spaceRoute = require('./routes/space.router');
const adminUserRoute = require("./routes/adminUser.routes");


const app = express();

app.use(bodyParser.json())

 app.use("/",UserRoute);
 app.use("/",spaceRoute);
 app.use("/",adminUserRoute);

 

 

module.exports = app;