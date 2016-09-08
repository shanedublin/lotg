/*jshint loopfunc: true */
var orm = require('../orm/seq.store.hero.js');
var ormHero = require('../orm/seq.hero.js');
var ormUserHero = require('../orm/seq.user.hero.js');
var seq = require('../orm/seq.js');

var dao = {};


//dao.getStoreHeroes = function(){
//	return orm.findAll({include:ormHero});
//};


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

dao.getStoreEntry = function(_heroId){
	return orm.find({where:{heroId:_heroId}});
};

dao.generateStoreEntry = function(hero){
	orm.findOrCreate({where: {heroId: hero.id}, defaults: {heroId: hero.id}}).spread(function(data,created){
		console.log(data.get());		
	});
};


/**
 * another method should make sure to remove the points from the user profile
 */
dao.purchaseHero = function(_userId, _heroId){
	
	
	return ormUserHero.findOrCreate({where:{userId: _userId, heroId: _heroId}});
	
	
};


dao.getStoreHeroes = function(userId){
	return seq.query('select h.name as "heroName" , h.id as "heroId", sh.soul_points as "soulPoints", sh.max, uh.quantity from public.store_hero sh '+ 
			'left join public.hero h on h.id = sh.hero_id '+
			'left join  public.user_hero uh on uh.hero_id = h.id and uh.user_id = ?',
			{replacements:[userId], type: seq.QueryTypes.Select});
//	.spread(function(results,meta){
//				console.log(results[0]);
//				//console.log(meta);
//			});

	
};

//dao.test();

module.exports = dao;