var Sequelize = require('sequelize');
var config = require('./../config/kyle/config.js');
var seq = require('./seq.js');
var user ={};

//user.init = function(seq){
//	
//	return seq.define('user',{
//		id:{
//			type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true,field: 'id'
//		},
//		name:{
//			type: Sequelize.STRING
//		},
//		password:{
//			type: Sequelize.STRING
//		},
//		salt:{
//			type: Sequelize.STRING
//		}
//	},config.defaultSequelizeSettings);
//}

user = seq.define('user',{
	id:{
		type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true,field: 'id'
	},
	name:{
		type: Sequelize.STRING
	},
	password:{
		type: Sequelize.STRING
	},
	salt:{
		type: Sequelize.STRING
	}
},config.defaultSequelizeSettings);

module.exports = user;
