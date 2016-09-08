
'use-strict';
var express = require('express');
var Store = express.Router();
var dao = require('./store.hero.dao.js');
var sessionManager = require('../session/session.js');
var util = require('../util/util.js');


console.log('Server Store Init');

Store.get('/heroes',function(req,res){
	dao.getStoreHeroes().then(function(heroes){
		res.send(heroes);
		
	},function(err){
		console.log(err);
		res.status(500);
	});
});



/**
 * Post a hero id to buy
 */
Store.post('/heroes/buy',function(req,res){
	
});

module.exports = Store;