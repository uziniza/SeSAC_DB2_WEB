const express = require("express");
const controller = require("../controller/Cvisitor");
const router = express.Router();

/* / GET */
router.get("/", controller.main);

/* /visitors GET */
router.get("/visitors", controller.getVisitors);

module.exports = router;
