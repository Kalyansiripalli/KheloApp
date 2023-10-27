const{DataTypes}=require('sequelize');
const {sequelize}=require('../../configuration/config');
const request=sequelize.define('requests',{
    request_for_event_id:DataTypes.INTEGER,
    event_creator_user_id:DataTypes.INTEGER,
    request_sentby_user_id:DataTypes.INTEGER,
    status:DataTypes.INTEGER,  
},{
    timestamps:false
});
exports.request=request;