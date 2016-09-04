(function(){
	'use-strict';
	
	
	angular.module('lotg.login').service('loginService',function($http,configService,$location){
		
		var service = {};
		
		service.sessionToken = null;
		
		service.saveToken = function(token){
			console.log();
//			var $httpProvider = $injector.get('$httpProvider');
			
			$http.defaults.headers.common = {
					'token': token.token
			};
			
			service.sessionToken = token;
		};
		
		service.clearToken = function(){
			
			service.sessionToken = null;
		};
		
		
		return service;
		
	});
})();
