const express = require("express");
const router = express();

const authController = require("../controller/controller_auth");

router.post("/login", authController.login);
router.post("/register", authController.register);
router.get("/users", authController.get);

module.exports = router;
