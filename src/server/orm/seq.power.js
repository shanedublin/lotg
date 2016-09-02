var Sequelize = require('sequelize');
var config = require('./../config/kyle/config.js');
var seq = require('./seq.js');

console.log('seq Hero power');
var power = {};

//power.init = function init(seq){	
//	return seq.define('hero_power',{
//		id:{
//			type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true,field: 'id'
//			},
//			name:{
//				type: Sequelize.STRING
//			},
//			description:{
//				type: Sequelize.STRING
//			}
//	},config.defaultSequelizeSettings);
//}

power = seq.define('hero_power',{
	id:{
		type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true,field: 'id'
		},
		name:{
			type: Sequelize.STRING
		},
		description:{
			type: Sequelize.STRING
		}
},config.defaultSequelizeSettings);

module.exports = power;
