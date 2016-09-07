'use-strict';
var uuid = require('node-uuid');

session = {};

// set the time out for an hour
session.timeout = 1000*60*60;

session.sessionMap = new Map();

session.createSession = function(userId){
	//console.log(userId);
	if(userId === null || userId === undefined)
		throw new Error('Null User Id');
	if(typeof userId !== 'number')
		throw new Error('Not a Number');
	
	
	var s = {		
			id: userId,
			token: uuid.v4(),
			expireTime :Date.now() + session.timeout
			
	};
	//console.log(s);
	session.sessionMap.set(s.token,s);
	return s;
	
};

session.destroySession = function(token){
	return session.sessionMap.delete(token);
};

session.getSession = function(token){
	//console.log('Getting Session');
	var s = session.sessionMap.get(token,s);
	//console.log('Found Session');
	if(s === null || s === undefined){
		throw new Error('No Such Session');
	}
	
	if(session.validateSession(s)){
		session.refreshSession(s);
		//console.log('Returring Session');
		return s;
		
	}else{
		session.destroySession(token);
		throw new Error('Expired Token');
	}
	
	
};

session.validateSession = function(s){
	if(s === null || s === undefined)
		return false;
	
//	console.log(s.expireTime);
//	console.log(Date.now());
	if(s.expireTime < Date.now())
		return false;
	
	return true;
};

session.refreshSession = function(s){
	s.expireTime = Date.now() + session.timeout;
};

module.exports = session;