const { event } = require("../models/event");
const { request } = require("../models/requests");
const { user } = require("../models/user");

const jwt = require('jsonwebtoken');
const secretkey=process.env.secretkey;

exports.eventParticipationController= async (req,res)=>{
    try {
        const bearertoken=req.headers.authorization;
        
        if(bearertoken===undefined)
            return res.send("you are not allowed to join in any event unless you login");

        const jwtToken = bearertoken.split(" ")[1];
        const decodedPayload = jwt.verify(jwtToken, secretkey);
        // {
        //     prop1: 'rahul@gmail.com',
        //     prop2: 'rahul123',
        //     iat: 1691645198,
        //     exp: 1691731598
        // }
        const details1 = await user.findOne({
            where: { email: decodedPayload.prop1 },
        });
        const request_sender_details=details1.toJSON();

        const details2 = await event.findOne({
            where: { event_id: req.query.eventid },
        });
        const event_details=details2.toJSON();

        await request.create({
            request_for_event_id:req.query.eventid,
            event_creator_user_id:event_details.creator_user_id,
            request_sentby_user_id:request_sender_details.user_id,
            status:0
        }) 
        return res.send("sent registration request successfully wait for the approval")

    } catch (error) {
        return res.status(500).send(error);
    }
}