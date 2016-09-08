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
	
	dao.purchaseHero(23,30).then(function(data){
		console.log(data.get());
	});
	
//	var it = dao.promise();
//	//console.log(it);
//	//console.log(next());
//	var p = it.next().value;
//	p.then(function(text){
//		console.log(text[0].get());
//		it.next(text);
//	},function(err){
//		console.log(err);
//		it.throw(err);
//	});
	
} catch (e) {
	console.log(chalk.red(e));
	// TODO: handle exception
}


module.exports = test;