const express=require("express");
const router=express.Router();

const {signUpValidator} = require("../middlewares/validators/signUpValidator");
const {signUpController} = require("../controllers/signUpController");
router.post("/",signUpValidator,signUpController);
module.exports = router;