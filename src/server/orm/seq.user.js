var Sequelize = require('sequelize');
var config = require('./../config/kyle/config.js');
var seq = require('./seq.js');
var user ={};

user = seq.define('user',{
	id:{
		type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true,field: 'id'
	},
	name:{
		type: Sequelize.STRING,
		unique: true
	},
	email:{
		type: Sequelize.STRING,
		unique: true
	},
	profileId:{
		type: Sequelize.INTEGER,
		field: 'profile_id'
		
	},
	password:{
		type: Sequelize.STRING
	}
},config.defaultSequelizeSettings);

module.exports = user;
