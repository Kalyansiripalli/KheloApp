const express=require("express");
const router=express.Router();
const app=express();
app.use(express.json());
const { updateStatusValidator } = require("../middlewares/validators/updateStatusValidator");
const { updateStatusController } = require("../controllers/updateStatusController");

router.post("/",updateStatusValidator,updateStatusController);
module.exports=router;