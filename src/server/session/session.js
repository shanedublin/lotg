'use-strict';
var uuid = require('node-uuid');

session = {};

// set the time out for an hour
session.timeout = 1000*60*60;

session.sessionMap = new Map();

session.createSession = function(userId){
	
	if(userId === null)
		throw new Error('Null User Id');
	if(typeof userId !== 'number')
		throw new Error('Not a Number');
	
	
	var s = {		
			id: userId,
			token: uuid.v4(),
			expireTime :Date.now() + session.timeout
			
	};
	//console.log(s);
	session.sessionMap.set(userId,s);
	return s;
	
};

session.destroySession = function(id){
	session.sessionMap.delete(id);
};

session.getSession = function(userId){
	var s = session.get(uerId,s);
	
	if(session.validateSession(s)){
		session.refreshSession(s);
		return s;
		
	}else{
		session.destroySession(userId);
		throw new Error('Expired Token');
	}
	
	
};

session.validateSession = function(s){
	if(s.expireTime > Date.now()){
		return false;	
	}else {
		return true;
	}
};

session.refreshSession = function(s){
	s.expireTime = Date.now() + session.timeout;
};

module.exports = session;