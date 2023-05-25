const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://laysiisx:B0z1Lo_FNijDBJ_s4tBeYMPZocRAHS2-@lallah.db.elephantsql.com/laysiisx', {dialect: 'postgres'});

module.exports = sequelize;