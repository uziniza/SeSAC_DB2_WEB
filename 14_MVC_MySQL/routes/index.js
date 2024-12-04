const express = require("express");
const controller = require("../controller/Cvisitor");
const router = express.Router();

/* / GET */
router.get("/", controller.main);

/* /visitors GET */
router.get("/visitors", controller.getVisitors);

/* /visitor/:id GET */
router.get("/visitor/:id", controller.getVisitor);

router.post("/visitor", controller.postVisitor);

router.delete("/visitor", controller.deleteVisitor);

router.patch("/visitor", controller.patchVisitor);
module.exports = router;
