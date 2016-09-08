var seq = require('./seq.js');
var hero = require('./seq.hero.js');
var power = require('./seq.power.js');
var storeHero = require('./seq.store.hero.js');

var run = {};

run.init = function init(){	
//	console.log('*********');
//	console.log(seq.models);
//	console.log('*********');
	power.belongsTo(hero, {foreignKey:'hero_id'});
	hero.hasMany(power, {as: 'powers',foreignKey:'hero_id',onDelete: 'cascade',hooks:true });
	//hero.belongsTo(storeHero,{foreignKey: 'id'});
	storeHero.belongsTo(hero,{ foreignKey: "hero_id"});
	
};

module.exports = run;

