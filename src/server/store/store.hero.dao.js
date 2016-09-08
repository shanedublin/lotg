/*jshint loopfunc: true */
var orm = require('../orm/seq.store.hero.js');
var ormHero = require('../orm/seq.hero.js');
var ormUserHero = require('../orm/seq.user.hero.js');


var dao = {};


dao.getStoreHeroes = function(){
	return orm.findAll({include:ormHero});
};


/**
 * should rarely be run, used to create entries for the store.
 */
dao.generateStoreEntries = function(heroes){
	for(let i = 0; i < heroes.length; i ++){
		//console.log('wow!');
		let hero = heroes[i];
		//console.log(hero.get());
		orm.findOrCreate({where: {heroId: hero.id}, defaults: {heroId: hero.id}}).spread(function(data,created){
			console.log(data.get());
			
		});
		
	}
};

/**
 * another method should make sure to remove the points from the user profile
 */
dao.purchaseHero = function(_userId, _heroId){
	
	
	return ormUserHero.findOrCreate({where:{userId: _userId, heroId: _heroId}}).spread(function(data,created){
		//console.log(data.get());
		data.quantity += 1;
		//console.log(created);
		return data.save();
	});
	
	
};


module.exports = dao;