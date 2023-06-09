const router = require("express").Router();
const spacecontroller = require("../controller/space.controller");
router.post("/createSpace",spacecontroller.createSpace);
router.post("/deletespace",spacecontroller.deleteSpace);
router.get("/getspacelist",spacecontroller.getSpaceList);
router.get("/getspacebyid",spacecontroller.getSpaceById);
router.get("/searchspace",spacecontroller.searchSpace);
router.post("/bookSpace",spacecontroller.bookSpace);
router.get("/getbookedspacesbyuser",spacecontroller.getBookedSpaces);



module.exports = router;