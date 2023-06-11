const express = require("express");
const router = require("express").Router();
const bodyParser = require("body-parser")
const UserRoute = require("./routes/user.routes");
const spaceRoute = require('./routes/space.router');

const app = express();

app.use(bodyParser.json({limit: '50mb', extended: true}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
app.use(bodyParser.text({ limit: '200mb' }));


 app.use("/",UserRoute);
 app.use("/",spaceRoute);

 

 

module.exports = app;