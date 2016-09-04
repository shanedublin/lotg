'use-strict';
var express = require('express');
var sessionManager = require('../session/session.js');
var chalk  = require('chalk');
var userDao = require('../user/user.dao.js');
//var auth = express.Router();

var auth = {};
console.log("Server Authorization Init");

//auth.all('/',);

auth.verify = function(req,res,next){
	
	if(req.method === 'OPTIONS'){
		next();
		return;
	}
	//console.log(req.params);
	//console.log(req.get('token'));
	var msg = chalk.blue(req.originalUrl);
	
	var token = req.get('token');
	if(token === undefined || token=== null){		
		
		msg += chalk.yellow(' No Token Provided');
		console.log(msg);
		
		//console.log('No Token Provided');
		next();
		
	}else{
		
	
	
		try {
			var session = sessionManager.getSession(token);
			userDao.findUserById(session.id).then(function(user){
				
				//console.log(user);
				msg += ' ' + chalk.magenta( user.name);			
				console.log(msg);
				
				req.lotg = {
						user: user
				}
				next();
			},function(err){
				console.log(err);
				next();
			});

			
		} catch (e) {

			console.log(e);
			msg += chalk.yellow(' Expired Token');
		} 
	
	}
	
	
};



module.exports = auth;