const{request}=require("../models/requests");
const{event}=require("../models/event");

exports.updateStatusController=async(req,res)=>{
   try {
        const details1=await request.findOne({
            where: { id: req.query.id },
        });
        const request_details=details1.toJSON();

        const details2=await request.findAll({
            where: { 
                request_for_event_id: request_details.request_for_event_id,
                status:1
            },
        });
        
        const all_accepted_requests=JSON.parse(JSON.stringify(details2, null, 2));

        const details3=await event.findOne({
            where: { event_id: request_details.request_for_event_id },
        });
        const event_details=details3.toJSON();

        if(all_accepted_requests.length >= event_details.PlayerLimit)
            return res.send("limit exceeded cannot accept any further requests");
        
        await request.update({ status: 1 }, {
                where: {id: req.query.id}
            });
        res.send("accpeted the request");
   } catch (error) {
        return res.status(500).send("unexpected error occured: ",error);
   }
}