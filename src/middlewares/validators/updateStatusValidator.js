const { request } = require("../../models/requests");
const jwt=require("jsonwebtoken");
const { user } = require("../../models/user");
const secretkey=process.env.secretkey;


const updateStatusValidator=async(req,res,next)=>{
    try {
        const details1=await request.findOne({
            where: { id: req.query.id },
        });
        const request_details=details1.toJSON();
        

        const bearertoken=req.headers.authorization;
        if(bearertoken===undefined)
            return res.send("you are not allowed to accept or reject any request unless you login");

        const jwtToken = bearertoken.split(" ")[1];
        const decodedPayload = jwt.verify(jwtToken, secretkey);

        const detalis2 = await user.findOne({
            where: { email: decodedPayload.prop1 },
        });
        const user_trying_to_accept_request=detalis2.toJSON();

        if(user_trying_to_accept_request.user_id==request_details.event_creator_user_id)
            return next();
        return res.send("you are not allowed to accept this request")
        

    } catch (error) {
        return res.send(error);
    }

}
exports.updateStatusValidator=updateStatusValidator;