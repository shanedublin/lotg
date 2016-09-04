var Sequelize = require('sequelize');
var seq = require('./seq.js');
var config = require('./../config/kyle/config.js');

//console.log('seq Hero');

var hero = {};

hero = seq.define('hero',{	
	id:{
		type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true,field: 'id'
	},
	name:{
		type: Sequelize.STRING
	},
	description:{
		type: Sequelize.STRING
	},
	health:{
		type: Sequelize.INTEGER
	},
	attack:{
		type: Sequelize.INTEGER
	},
	range:{
		type: Sequelize.INTEGER
	},
	points:{
		type: Sequelize.INTEGER
	},
	defense:{
		type: Sequelize.INTEGER
	},
	move:{
		type: Sequelize.INTEGER
	},
	personalityId:{
		type: Sequelize.INTEGER,
		field: 'personality_id'
	},
	godId:{
		type: Sequelize.INTEGER,
		field: 'god_id'
	},
	speciesId:{
		type: Sequelize.INTEGER,
		field: 'species_id'
	},
	sizeId:{
		type: Sequelize.INTEGER,
		field: 'size_id'
	},
	height:{
		type: Sequelize.INTEGER
	}
},config.defaultSequelizeSettings);

module.exports = hero;
