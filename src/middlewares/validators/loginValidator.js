const { user } = require("../../models/user");
const bcrypt=require('bcrypt');

const loginValidator=async(req,res,next)=>{
    try {
        const details1 = await user.findOne({
            where: { email: req.body.email },
        });
        if(!details1)
            res.send("signUp first");

        const passwordHash=details1.password;
        bcrypt.compare(req.body.password, passwordHash).then(function(result) {

            if(result==true){// valid credentials
                return next();
            }
            if(result==false)
                return res.send("invalid credentials");
        });

    } catch (error) {
        console.log(error);
        return res.status(500).send("Internal Server Error")    
    }
}
module.exports=loginValidator;