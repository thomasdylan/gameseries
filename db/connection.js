const Sequelize = require("sequelize");

const sequelize = new Sequelize("gameseries", 'root', '', { host: 'localhost', dialect: "mysql" });

module.exports = sequelize;
