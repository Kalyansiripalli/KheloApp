const express=require("express");
const loginValidator = require("../middlewares/validators/loginValidator");
const { loginController } = require("../controllers/loginController");
const router=express.Router();
const app=express();
app.use(express.json());

router.post("/",loginValidator,loginController);
module.exports=router;