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

	
	var msg = chalk.blue(req.originalUrl);
	//console.log(req.method);
	if(req.method === 'OPTIONS'){
		msg += chalk.yellow(' Options');
		console.log(msg);
		next();
		return;
	}

	var token = req.get('token');
	if(token === undefined || token=== null){		
		
		msg += chalk.yellow(' No Token Provided');
		console.log(msg);
		
		//console.log('No Token Provided');
		next();
		return;
		
	}else{
	
	
		try {
			var session = sessionManager.getSession(token);
			userDao.findUserById(session.id).then(function(user){
				
				//console.log(user);
				msg += ' ' + chalk.magenta( user.name);			
				console.log(msg);
				
				req.lotg = {
						user: user
				};
				next();
				return;
			},function(err){
				console.log(err);
				next();
				return;
			});

			
		} catch (e) {
			if(e.message === 'No Such Session'){
				msg += chalk.yellow(' Expired Token');
				console.log(msg);
			}else{
				console.log(chalk.red('Problem getting Token'));
				console.log(e);				
			}
			next();		
			return;
		} 
	
	}
	
	
};



module.exports = auth;