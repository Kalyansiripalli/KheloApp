// const express=require("express");
// const router=express.Router();
// const app=express();

// app.use(express.json());    
// router.get("/",teamValidator,teamsController);
// module.exports=router;

const express=require("express");
const router=express.Router();
const app=express();
app.use(express.json());
const teamViewValidator=require("../middlewares/validators/teamValidator");
const { teamViewController } = require("../controllers/temViewController");
router.get("/",teamViewValidator,teamViewController);
module.exports=router;