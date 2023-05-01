const router = require("express").Router();
const spacecontroller = require('C:/Users/Public/newbackend/controller/space.controller');
router.post("/createspace",spacecontroller.createSpace);



module.exports = router;