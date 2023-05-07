const router = require("express").Router();
const adminUserController = require('../controller/adminUser.controller');


router.post("/adminlogin", adminUserController.login);


module.exports = router;