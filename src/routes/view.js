const express=require("express");
const router=express.Router();
const app=express();
app.use(express.json());
const { CustomSort} = require("../controllers/viewEventsController")

router.get("/CustomSort",CustomSort); // whwn you search events by the name you get all the events and in addition to that you can sort the display result by any field value of the events table 

module.exports=router;