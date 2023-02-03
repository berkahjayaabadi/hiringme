const express = require("express");
const router = express();

const authController = require("../controller/controller_auth");

router.post("/login", authController.login);
router.post("/register", authController.register);

module.exports = router;
