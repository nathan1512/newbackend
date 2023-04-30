const express = require("express");
const bodyParser = require("body-parser");
const UserRoute = require("./routes/user.routes");
const ToDoRoute = require('./routes/todo.router');
const spaceRoute = require("./routes/space.routes");
const app = express();

app.use(bodyParser.json())

 app.use("/",UserRoute);
 app.use("/",ToDoRoute);
 app.use("/",spaceRoute);

module.exports = app;