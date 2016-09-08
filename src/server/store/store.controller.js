
'use-strict';
var express = require('express');
var Store = express.Router();
var dao = require('./store.hero.dao.js');
var sessionManager = require('../session/session.js');
var util = require('../util/util.js');


console.log('Server Store Init');

Store.get('/heroes',function(req,res){
	var user = util.getUser(req);
	var userId = null;
	if(user !== null){
		userId = user.id;
	}
	dao.getStoreHeroes(userId).spread(function(heroes){		
		res.send(heroes);
		// load all the info on the user hero...
		
		
		
	},function(err){
		console.log(err);
		res.status(500);
	});
});



/**
 * Post a hero id to buy
 */
Store.post('/heroes/buy',function(req,res){
	var user = util.getUser(req);
	if(user === null){
		res.statusMessage = "Not Logged in!";
		res.status(403).send();
		return;
	}
	var body = req.body;
	//console.log(body);
	if(body === null || body.heroId === undefined || body.heroId === null ){
		res.statusMessage = "Hero information Missing";
		res.status(400).send();
		return;
	}
	
	
	var heroId = parseInt(body.heroId);
	//console.log(heroId);
	// get the information on the store entry
	dao.getStoreEntry(heroId).then(function(storeEntry){
		// check to see that the user has enough points to make this purchase
		if(user.points >= storeEntry.soulPoints){
			// get the user's information on this hero
			dao.purchaseHero(user.id, heroId).spread(function(userHero, other) {
				// if the user hero's quantity is less that the alloted 
				if(userHero.quantity < storeEntry.max){
					// subtract points
					user.points -= storeEntry.soulPoints;
					// increment hero
					userHero.quantity ++;
					// save the hero
					userHero.save().then(function(){
						// save the user
						user.save().then(function(){
							res.send(true);
						});		
						
					});
					
				}else{
					res.statusMessage = 'All readdy maxed out!';
					res.status(400).send();
				}			
			});
		}else{
			res.statusMessage = 'Not enough Soul Points!';
			res.status(400).send();
		}
		
	});
	
	
	
});

module.exports = Store;