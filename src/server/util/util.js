(function(){
	'use-strict';

	var util = {};
	
	/**
	 * pass the request
	 * will return a user if there is one stored
	 */
	util.getUser = function getUser(req){
		if(req.lotg === null || req.lotg === undefined){
			return null;
		}
		
		return req.lotg.user;
	};
	
	
	module.exports = util;
	
})();

