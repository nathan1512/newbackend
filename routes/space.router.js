const router = require("express").Router();
const spacecontroller = require("../controller/space.controller");
router.post("/createSpace",spacecontroller.createSpace);
router.post("/deletespace",spacecontroller.deleteSpace);
router.post("/getspacelist",spacecontroller.getSpaceList);
router.post("/searchspace",spacecontroller.searchSpace);

module.exports = router;