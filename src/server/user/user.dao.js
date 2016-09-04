var ormUser = require('../orm/seq.user.js');
var bcrypt = require('bcrypt');
const saltRounds = 10;


var dao = {};


dao = {};

dao.createUser = function createUser(params){
	// searches for a user that matches either of the params
	return ormUser.findOne({where: {$or: {email:params.email, name: params.name }}}).then(function(data){
		
		if(! dao.acceptablePassword(params.password)){
			return new Promise(function(resolve,reject){				
				reject('Unacceptable Passwrod');
			});
		}
		
		if(data === null){
			return dao.hashPassword(params.password).then(function(hash){
				params.password = hash;
				return ormUser.create(params);
			});
			
		}else{
			return new Promise(function(resolve,reject){				
				reject('A user with the email or name already exsists');
			});
		}
	});
	
};

dao.updateUser = function updateUser(params){
	//console.log(params);
	return ormUser.findById(params.id).then(function(data){
		if(data === null){			
			return new Promise(function(resolve,reject){				
				reject('No User with this id exsists');
			});
		}else{
			return data.update(params);
			//return ormUser.create(params);
		}
	});
};

/**
 * returns a user trying to match it by it's email.
 */
dao.findUser = function findUser(params){
	return ormUser.findOne({where: {email:params.email}});
};

dao.checkForEmail = function checkForEmail(params){
	return ormUser.count({where: {email: params.email}});
};

dao.checkForName = function checkForUserName(params){
	return ormUser.count({where: {name: params.name}});
	
};

dao.hashPassword = function(password){
	return new Promise(function(resolve,reject){
		bcrypt.hash(password, saltRounds, function(err,hash){
			if(err){
				reject(err);
			}else{
				resolve(hash);
			}			
		});
		
	});
};

dao.comparePassword = function(plainPassword,hashedPassword){
	return new Promise(function(resolve,reject){
		bcrypt.compare(plainPassword, hashedPassword, function(err,hash){
			if(err){
				reject(err);
			}else{
				resolve(hash);
			}			
		});
		
	});
};

dao.acceptablePassword = function (password){
	if(password === null || password === undefined)
		return false;
	if(typeof password !== 'string')
		return false;
	if(password.length <= 7 )
		return false;
	
	return true;
};

module.exports = dao;