const router = require("express").Router();
const spacecontroller = require("../controller/space.controller");
router.post("/createspace",spacecontroller.createSpace);
router.post("/deletespace",spacecontroller.deleteSpace);
router.post("/getspacelist",spacecontroller.getSpaceList);
module.exports = router;