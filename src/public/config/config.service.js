(function(){
	'use-strict';
	
	
	angular.module('lotg').service('configService',function(){
		console.log('Config Service');
		var config = {};
		config.nodeAddress = 'http://localhost:3000';
		return config;
		
		
	});
})();
