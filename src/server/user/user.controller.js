
'use-strict';
var express = require('express');
var Login = express.Router();
var dao = require('./user.dao.js');

Login.post('/login',function(req,res){

	var params = req.body;
	dao.findUser(params).then(function(value) {
		//console.log(value.get());
		if(value !== null){
			dao.comparePassword(params.password,value.password).then(function(result){			
				
				if(result){
					res.send('Good login');				
				}else{
					res.status(403).send('Invalid username or password!');	
				}
			},function(err){
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

Login.post('/logout',function(req,res){
	res.send('k bye');
});

Login.post('/create',function(req,res){
	var params = req.body;
	dao.createUser(params).then(function(value){
		res.send(value);
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
	
	userDao.checkForname({name: r.name}).then(function(data){
		if( data > 0){
			return false;
		}else{
			return true;
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
	userDao.checkForEmail({email: r.email}).then(function(data){
		if( data > 0){
			return false;
		}else{
			return true;
		}
	});
});


console.log('Server Login Init');



module.exports = Login;