/*jshint loopfunc: true */
var dao = require('../store/store.hero.dao.js');
var ormHero = require('../orm/seq.hero.js');
const assert = require('assert');
const chalk = require('chalk');


var test = {};
console.log('store test');

try {
	
//	dao.getStoreHeroes().then(function(data){
//		for(let i = 0; i < data.length; i ++){
//			console.log('');
//			console.log(data[i].get({plain:true}));
//		}
//	});
	
	
//	ormHero.findAll().then(function(heroes){
//		dao.generateStoreEntries(heroes);
//	});
//	
	dao.purchaseHero(23,30).then(function(data){
		console.log(data.get());
	});
	

	
} catch (e) {
	console.log(chalk.red(e));
	// TODO: handle exception
}


module.exports = test;