const express = require("express");
const router = express.Router();

//Insert Model
const User = require("../Model/UserModel");
//Insert User Controller
const UserController = require("../Controllers/UserControllers");

// console.log("Is controller loaded?", UserController);
// console.log("Is function defined?", UserController.getAllUsers);

router.get("/",UserController.getAllUsers);
router.post("/",UserController.addUsers);

//export
module.exports = router;