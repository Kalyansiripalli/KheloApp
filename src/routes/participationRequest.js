const express=require("express");
const router=express.Router();
const app=express();
app.use(express.json());
const authorization = require("../middlewares/authorization");
const { eventParticipationController } = require("../controllers/eventParticipationController");

router.post("/",authorization,eventParticipationController);
module.exports=router;