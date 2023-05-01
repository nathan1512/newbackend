const express = require("express");
const router = require("express").Router();
const bodyParser = require("body-parser")
const UserRoute = require("./routes/user.routes");
const ToDoRoute = require('./routes/todo.router');
const spaceRoute = require('./routes/space.router');

const app = express();

app.use(bodyParser.json())

 app.use("/",UserRoute);
 app.use("/",spaceRoute);
 app.use("/",ToDoRoute);
 

 

module.exports = app;