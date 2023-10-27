const{DataTypes}=require('sequelize');
const {sequelize}=require('../../configuration/config');
const user=sequelize.define('user',{
    user_id:{
        primaryKey:true,
        autoIncrement:true,
        type:DataTypes.INTEGER
    },
    name:DataTypes.STRING,
    email:DataTypes.STRING,
    password:DataTypes.STRING,
},{
    timestamps:false
})
exports.user=user;
