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
			delete($http.defaults.headers.common.token);
			
			
			service.sessionToken = null;
		};
		service.isLoggedIn = function(){
			if(service.sessionToken === null){
				return false;
			}else{
				return true;
			}
		};
		
		service.logOut = function(){
			service.clearToken();
			
		};
		
		return service;
		
	});
})();
