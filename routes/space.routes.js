const router = require("express").Router();
const spaceController = require('../controller/space.controller');

router.post("/createSpace",spaceController.createSpace);

router.get('/getUserSpaceList',spaceController.getUserSpaceList);

router.post("/deleteSpace",spaceController.deleteSpace);



module.exports = router;