var Sequelize = require('sequelize');
var seq = require('./seq.js');
var config = require('./../config/kyle/config.js');

//console.log('seq Hero');

var storeHero = {};

storeHero = seq.define('store_hero',{	
	id:{
		type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true,field: 'id'
	},
	heroId:{
		type: Sequelize.INTEGER, field: 'hero_id'
	},
	soulPoints:{
		type: Sequelize.INTEGER, field: 'soul_points'
	},
	max:{
		type: Sequelize.INTEGER
	}
},config.defaultSequelizeSettings);

module.exports = storeHero;
