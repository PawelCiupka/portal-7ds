// import * as userCtrl from "./controllers/user-controller";
const express = require("express");
const router = express.Router();
const userController = require('./controllers/user-controller')

router.get("/getUsername/:id", userController.getUsername);
router.post("/create", userController.create);
router.get("/checkIfUserExist/:username", userController.checkIfUserExist);

module.exports = router;
