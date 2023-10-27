const { user } = require("../models/user");
const{request}=require("../models/requests");
const jwt=require("jsonwebtoken");
const secretkey=process.env.secretkey;

exports.ProfileController= async (req,res)=>{
    try {
        
        if (!req.headers.authorization) {
            return res.status(401).send("Please login first and then try again.");
        }
        
        const bearertoken=req.headers.authorization;
        const jwtToken = bearertoken.split(" ")[1];
        const decodedPayload=jwt.verify(jwtToken,secretkey); 
    
        const user_details=await user.findOne({
            where:{email:decodedPayload.prop1}
        });
        const details1=await request.findAll({
            where: { 
                request_sentby_user_id: user_details.user_id,
                status:1
            },
        });
        const acceptedRequests=JSON.parse(JSON.stringify(details1, null, 2));

        const details2=await request.findAll({
            where: { 
                request_sentby_user_id: user_details.user_id,
                status:0
            },
        });
        const rejectedRequests=JSON.parse(JSON.stringify(details2, null, 2));
        console.log(acceptedRequests);
        console.log(rejectedRequests);
        return res.send({acceptedRequests,rejectedRequests});
        
    } catch (error) {
        return res.status(500).send(error);
    }
}



