const { request } = require("../models/requests");

exports.teamViewController=async (req,res)=>{
    try {
        const details=await request.findAll({
            where: { 
                request_for_event_id: req.query.eventid,
                status:1
            },
        });
        const team=JSON.parse(JSON.stringify(details, null, 2));
    
        return res.send({ListOfTeamMembers:team});  
    } catch (error) {
        return res.status(500).send("unexpected error occured: ",error);
        
    }
    
};

