exports.CustomSort=async(req,res)=>{
    const {event}=require("../models/event");
    const { Op } = require('sequelize');
    // out of all available events
    const {eventname="",StartTime=1,EndTime=24,creator_user_id,PlayerLimit=0,ticket_price=0,sort="ASC"}=req.query;
    const order=[];
    const obj={
    NameOfEvent: {[Op.like]: `%${eventname}%`},
      StartTime:{[Op.gte]: StartTime},
      EndTime:{[Op.lte]: EndTime},
    }
    console.log(obj);
    if (creator_user_id > 1){
      obj.creator_user_id=creator_user_id
    };

    if (PlayerLimit === '1') order.push(['PlayerLimit', sort]);

    if (ticket_price === '1') order.push(['ticket_price',sort]);

    const events=await event.findAll({
      where: obj,
      order: order
    })

    if(events) {
      return res.json({events})
    };
  
}    
