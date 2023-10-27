const express=require("express");
const router=express.Router();
const app=express();
app.use(express.json());

const { eventAdditionController } = require("../controllers/eventAdditionController");


router.post('/',eventAdditionController);
module.exports=router; 