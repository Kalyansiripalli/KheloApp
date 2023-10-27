const { user } = require("../models/user");
const bcrypt=require('bcrypt');
const jwt=require("jsonwebtoken");
const secretkey=process.env.secretkey

exports.loginController= async (req,res)=>{
    try {
        
        const hashedpassword=bcrypt.hashSync(req.body.password,10); 
        await user.update({ password: hashedpassword}, {
            where: {email: req.body.email}
        });
        let obj={
            prop1:req.body.email,
            prop2:req.body.password
        };
        
        jwt.sign(obj,secretkey,{expiresIn:'2m'},(err,token)=>{
            if(err)
                return res.status(500).send("error");
            else
            return res.send(token);    
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send("errors");
    }
}


