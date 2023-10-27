const{DataTypes}=require('sequelize');
const {sequelize}=require('../../configuration/config');
const event=sequelize.define('events',{
    event_id:{
        primaryKey:true,
        autoIncrement:true,
        type:DataTypes.INTEGER
    },
    NameOfEvent:DataTypes.STRING,
    Description:DataTypes.STRING,
    StartTime:DataTypes.INTEGER,
    EndTime:DataTypes.INTEGER,
    PlayerLimit:DataTypes.INTEGER,
    creator_user_id:DataTypes.INTEGER,
    ticket_price:DataTypes.INTEGER,
    
},{
    timestamps:false
});
exports.event=event;