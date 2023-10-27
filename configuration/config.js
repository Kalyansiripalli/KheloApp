const { Sequelize } = require('sequelize');
require("dotenv").config();
const sequelize = new Sequelize('khelo', 'root', process.env.dbpassword , {
  host: 'localhost',
  dialect: 'mysql'
});
exports.sequelize=sequelize;


