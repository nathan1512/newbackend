const router = require("express").Router();
const spacecontroller = require('C:/Users/Public/newbackend/controller/space.controller');
router.post("/createspace",spacecontroller.createSpace);
router.post("/deletespace",spacecontroller.deleteSpace);
router.post("/getspace",spacecontroller.getSpacesById);







module.exports = router;