const express = require("express");
const router = express.Router();
const controller = require("../controller/Cuser");
//get /user
router.get("/", controller.getuser);
module.exports = router;
