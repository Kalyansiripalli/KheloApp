const { request } = require("../../models/requests");
const { user } = require("../../models/user");
const jwt=require("jsonwebtoken");
const secretkey=process.env.secretkey;

const teamValidator=async(req,res,next)=>{
    try {
        const bearertoken=req.headers.authorization;
        if(bearertoken===undefined)
            return res.send("you are not allowed to see list of your teammates unless you login");

        const jwtToken = bearertoken.split(" ")[1];
        const decodedPayload =  jwt.verify(jwtToken, secretkey);
        
        const detalis1 = await user.findOne({
            where: { email: decodedPayload.prop1 },
        });

        const userRequestingTeam=detalis1.toJSON();
        console.log("hi");
        console.log(req.query.eventid);
        
        const details2 = await request.findOne({
            where: { request_for_event_id: req.query.eventid , request_sentby_user_id:userRequestingTeam.user_id}
        });

        const requestDetails=details2.toJSON();
        console.log(requestDetails);

        if(requestDetails.status=== 1)
            return next();
        return res.send("only the users who are members of the team can see the list of team")

    } catch (error) {
        return res.send(error);     
    }
}
module.exports=teamValidator;