(function(){
	'use-strict';
	
	
	angular.module('lotg').service('configService',function(){
		console.log('Config Service');
		var config = {};
		config.nodeAddress = 'http://192.168.0.2:3000';
		return config;
		
		
	});
})();
