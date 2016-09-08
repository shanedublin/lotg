// this class is for representing how many hero's the player has purchased

var Sequelize = require('sequelize');
var seq = require('./seq.js');
var config = require('./../config/kyle/config.js');

//console.log('seq Hero');

var userHero = {};

userHero = seq.define('user_hero',{	
	id:{
		type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true,field: 'id'
	},
	userId:{
		type: Sequelize.INTEGER, field: 'user_id'
	},
	heroId:{
		type: Sequelize.INTEGER, field: 'hero_id'
	},
	quantity:{
		type: Sequelize.INTEGER
	}
},config.defaultSequelizeSettings);

module.exports = userHero;
