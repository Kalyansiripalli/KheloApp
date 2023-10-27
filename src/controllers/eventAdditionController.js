const { user } = require("../models/user");
const { event } = require("../models/event");
const bcrypt=require('bcrypt');
const jwt=require("jsonwebtoken");
const secretkey=process.env.secretkey 

exports.eventAdditionController= async (req,res)=>{
    try {
        let email="";
        if (req.headers.authorization){
            const bearertoken=req.headers.authorization;
            const jwtToken = bearertoken.split(" ")[1];

            const decodedPayload=jwt.verify(jwtToken,secretkey);
            console.log(decodedPayload);

            if(!decodedPayload)
                res.send("invalid login cannot addEvents")
            console.log("hi");
            console.log(decodedPayload);

            email=decodedPayload.prop1;
            let user_details=await user.findOne({
                where:{email:email}
            })
            await event.create({
                NameOfEvent:req.body.NameOfEvent,
                Description:req.body.Description,
                StartTime:req.body.StartTime,
                EndTime:req.body.EndTime,
                PlayerLimit:req.body.PlayerLimit,
                creator_user_id:user_details.user_id,
                ticket_price:req.body.ticket_price,
            })
            return res.send("event added successfully");     
        }
        return res.send("pls kindly login first and then try again");    
    } catch (error) {
        console.log(error);
        return res.send("unexpected error occured: ");  
    }  
}


