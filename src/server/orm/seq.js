var Sequelize = require('sequelize');
var config = require('./../config/kyle/config.js');
var seq = new Sequelize(...config.databaseConnection);
//var hero = require('./seq.hero.js');
//var power = require('./seq.power.js');
//var user = require('./seq.user.js');


//seq.init = function init(){	
//}
//hero.init(seq);
//power.init(seq);
//user.init(seq);
//console.log('*********');
//console.log(seq.models);
//console.log('*********');
//power.belongsTo(hero, {foreignKey:'hero_id'});
//hero.hasMany(power, {as: 'powers',foreignKey:'hero_id',onDelete: 'cascade',hooks:true });

module.exports = seq;

