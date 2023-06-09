"use strict";
const banco = require('sequelize');
const sequelize = new banco('postgres://laysiisx:B0z1Lo_FNijDBJ_s4tBeYMPZocRAHS2-@lallah.db.elephantsql.com/laysiisx', { dialect: 'postgres' });
module.exports = sequelize;
