const express=require("express");
const authorization = require("../middlewares/authorization");
const { ProfileController } = require("../controllers/profileController");
const router=express.Router();
const app=express();
app.use(express.json());

// to see the profile provide respective jwt token 
router.get("/",authorization,ProfileController);
module.exports=router;
