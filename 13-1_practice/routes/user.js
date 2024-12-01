const express = require("express");
const router = express.Router();
const Cuser = require("../controllers/Cuser");

router.get("/", Cuser.getLoginPage);
router.post("/login", Cuser.login);

module.exports = router;
