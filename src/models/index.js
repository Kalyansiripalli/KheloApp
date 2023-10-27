const{user}=require("./user");
const{event}=require("./event");
const{request}=require("./requests");
const { sequelize } = require("../../configuration/config");
async function dbsync(){
    await sequelize.sync({
        alter: true
    });
    console.log("All models were synchronized successfully.");
};
module.exports=dbsync;