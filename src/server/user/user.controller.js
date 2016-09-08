
'use-strict';
var express = require('express');
var Login = express.Router();
var dao = require('./user.dao.js');
var sessionManager = require('../session/session.js');
var util = require('../util/util.js');

Login.post('/login',function(req,res){

	var params = req.body;
	dao.findUser(params).then(function(value) {
		//console.log(value.get());
		if(value !== null){
			dao.comparePassword(params.password,value.password).then(function(result){
				//console.log(result);
				if(result){
					var token = session.createSession(value.id);					
					res.send(token);				
				}else{
					res.status(403).send('Invalid username or password!');	
				}
			},function(err){
				console.log(err);
				res.status(403).send('Invalid username or password!');
				
			});
			
		}
		else{
			res.status(403).send('Invalid username or password!');
		}
	}, function(reason) {
		console.error(reason);
		res.status(400);
	});	

});

Login.get('/logout',function(req,res){
	//var user = util.getUser(req);
	var token = req.get('token');
	if(token === null || token === undefined){
		res.status(401).send('You are not logged in!');
		return;
	}
	
	var session = sessionManager.destroySession(token);
	if(session !== null){		
		res.send(true);
	}else{
		res.send(false);
	}
	

});

Login.post('/create',function(req,res){
	var params = req.body;
	dao.createUser(params).then(function(value){
		var token = session.createSession(value.id);
		res.send(token);
	},function(reason){
		console.error(reason);
		res.status(400);
	});
});


/**
 * Checks to see if the user name is already in use
 * returns true if the user name is available
 * return false if unavailable
 */
Login.post('/username',function(req,res){
	var r = req.body;
	
	dao.checkForName({name: r.name}).then(function(data){
		if( data > 0){
			res.send( false);
		}else{
			res.send(true);
		}
	});
});


/**
 * Checks to see if the email is already in use
 * returns true if the email is available
 * return false if unavailable
 */
Login.post('/email',function(req,res){
	var r = req.body;
	dao.checkForEmail({email: r.email}).then(function(data){
		if( data > 0){
			res.send( false);
		}else{
			res.send(true);
		}
	});
});

Login.get('/profile',function(req,res){
	//console.log('Profile');
	var user = util.getUser(req);
	if(user === null){
		res.status(403);
		return;
	}
	//console.log('Profile2');
	
	var profile = {
			name: user.name,
			id: user.id,
			email: user.email
	};
	//console.log('Profile3');
	
	res.send(profile);	
	//console.log('profile4');
	
	
});
// updates user
Login.post('/profile',function(req,res){
	var r = req.body;
	var user = util.getUser(req);
	if(user === null){
		res.status(403);
		return;
	}
	
	//TODO
	
	
	
});

Login.get('/sp',function(req,res){
	
	var user = util.getUser(req);
	var points = 0;
	if(user === null){
		res.status(403).send('Not Logged in!');
		
	}else{
		console.log(user.points);
		res.json(user.points);
	}
	
	
	
	
});

console.log('Server Login Init');



module.exports = Login;