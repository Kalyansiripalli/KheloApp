const { user } = require("../models/user");
const { events } = require("../models/event");
const bcrypt=require('bcrypt');
const jwt=require("jsonwebtoken");
const secretkey=process.env.secretkey // dont forget to put this in .env finally it should not be visble to anyonne

exports.signUpController= async (req,res)=>{
    try {
        let user_details=await user.findOne({
            where:{email:req.body.email}
        })
    
        if(user_details)
            return res.send("user already exist cant register with the same credentials again");
    
        const hashedpassword=bcrypt.hashSync(req.body.password,10);
        await user.create({
            name:req.body.name,
            email:req.body.email,
            password:hashedpassword
        }) 

        const obj={
            prop1:req.body.email,
            prop2:req.body.password
        };

        let token="";
        jwt.sign(obj,secretkey,{expiresIn:'2m'},(err,token)=>{
            if(err)
                console.log("error in creating token: ",err);
            else
            
            res.send(token);    
        });        
    } catch (error) {
        return res.status(500).send("unexpected error occured: ",error);
    }
    
};
